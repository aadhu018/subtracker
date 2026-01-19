'use client';

export const dynamic = "force-dynamic";

import SubscriptionSummary from "@/components/SubscriptionSummary";
import Login from "@/components/Login";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import SubscriptionForm from "@/components/SubscriptionForm";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const blankSubscription = {
        name: '',
        category: 'Web Services',
        cost: '',
        currency: 'USD',
        billingFrequency: 'Monthly',
        nextBillingDate: '',
        paymentMethod: 'Credit Card',
        startDate: '',
        renewalType: '',
        status: 'Active',
        notes: '',
    }

export default function DashboardPage() {

    
    const [isAddEntry, setIsAddEntry] = useState(false); // Replace with actual logic 

    const [formData, setFormData] = useState(blankSubscription);

    const { handleDeleteSubscription, userData, currentUser, loading } = useAuth()
    const isAuthenticated = !!currentUser

    function handleChangeInput(e) {
        const newData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newData);
    }

    function handleEditSubscription(index) {
        const data = userData.subscriptions.find((val, valIndex) => {
            return valIndex === index
        } )
        setFormData(data)
        handleDeleteSubscription(index)
        setIsAddEntry(true)
    }

    function handleResetForm() {
        setFormData(blankSubscription)
    }

    function handleToggleInput() {
        setIsAddEntry(!isAddEntry);
    }

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    if (!isAuthenticated) {
        // Redirect to login page
        return (
            <Login />
        )
    }

    return (
        <>
            <SubscriptionSummary />
            <SubscriptionsDisplay handleEditSubscription={handleEditSubscription} handleShowInput={isAddEntry ? () => { } : handleToggleInput} />
            {isAddEntry && (
                <SubscriptionForm handleResetForm={handleResetForm} closeInput={handleToggleInput} formData={formData} handleChangeInput={handleChangeInput} />
            )}
        </>
    );
}
