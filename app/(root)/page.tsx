import React from 'react';
import HeaderBox from "@/components/HeaderBox";

const Home = () => {
    const loggedIn = { firstName: "Stefan" };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your accounts, and transactions efficiently."
                    />
                </header>
            </div>
        </section>
    )
}

export default Home