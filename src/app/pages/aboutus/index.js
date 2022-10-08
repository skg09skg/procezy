import React from 'react';
import './index.scss';
// import Faq from 'react-faq-component';
import {
    ExpansionList,
    ExpansionPanel,
    usePanels,
} from '@react-md/expansion-panel';

const AboutUs = () => {
    // const [panels, onKeyDown] = usePanels({
    //     count: 3,
    //     idPrefix: 'my-panel-group',
    // });

    // const [panel1Props, panel2Props, panel3Props] = panels;

    const data = {
        title: `Help Center`,
        rows: [
            {
                title: `What is ProcEzy?`,
                content: `<h5>ProcEzy is India’s 1st marketplace designed for the IT Channel Partner ecosystem members. 
                The marketplace is accessible to registered members only. REGISTRATION IS FREE to all “IT Channel Partner 
                Ecosystem members”. </h5>`
            },
            {
                title: `What do you mean by IT Channel Partner Ecosystem members?`,
                content: `<h5>An IT channel partner ecosystem includes all the businesses that are established with the goal to market, 
                sell, service, and support, IT products, software solutions, and services to customers. An example of all the IT 
                Channel Partner ecosystem members is given below.</h5>

                <ul>
                <h6><li>Hardware Reseller</li></h6>
                <h6><li>System Integrator</li></h6>
                <h6><li>Value Added Reseller</li></h6>
                <h6><li>Local Original Equipment Manufacturer</li></h6>
                <h6><li>Network Solutions Provider</li></h6>
                <h6> <li>Network Systems Integrator</li></h6>
                <h6><li>Regional Distributor </li></h6>
                <h6><li>National Distributor</li></h6>
                <h6><li>Independent Software Vendor (integrates systems with their solutions)</li><li>Managed Service Provider</li></h6>
                </ul`
            },
            {
                title: `What does ProcEzy do?`,
                content: `<h5>ProcEzy makes the process of Buying and Selling IT products between partners easier by connecting 
                channel partners across India on a single platform.</h5>`
            },
            {
                title: `Is ProcEzy Free to use?`,
                content: `<h5>Yes, ProcEzy is free to use for all registered IT Channel Partner Ecosystem members.</h5>`
            },
            {
                title: `Does ProcEzy charge any commission to SELL or BUY on the platform?`,
                content: `<h5>NO. ProcEzy does not charge any commission for Selling or Buying on the platform.</h5>`
            },
            {
                title: `Should my organization be registered with the GST department to complete registration with ProcEzy?`,
                content: `<h5>Yes, ProcEzy requires that its users (organizations) are GST registered.</h5>`
            },
            {
                title: `How does this ProcEzy work?`,
                content: `<h5>Only IT Channel Partner Ecosystem members can register their organization as a BUYER or SELLER.</h5>

                <h5>Once their registration is approved by the marketplace administrator, they can start using the marketplace to:</h5>
                <ul>
                <h6><li>As a BUYER - search for IT products that they need to source from other partners.</li></h6>
                <h6><li>As a SELLER - sell IT products to other partners who are searching for IT products to meet their business 
                demands.</li></h6>
                </ul>`
            },
            {
                title: `How do I register at ProcEzy?`,
                content: `<h5>You can visit the ProcEzy website https://www.procezy.com and select the “Register” option. Here you will 
                find “Register as a Buyer” and “Register as a Seller”. You can choose the type of role and start your registration 
                process</h5>`
            },
            {
                title: `How does the BUYER role work?`,
                content: `<h5>ProcEzy maintains a vast and growing database of IT products which is categorized by Product Type, Manufacturers, 
                Models & various SKUs under each model.</h5>


                <h6>A BUYER can search for a product from the ProcEzy database and will be 
                shown a list of Sellers who are selling the product on ProcEzy.</h6>
                <ul>
                <h6><li>The BUYER can choose the seller depending on the prices and availability of the product.</li></h6>
                <h6><li>The BUYER can chat directly with the SELLER organization and negotiate better pricing directly with the 
                SELLER. Orders can be confirmed over the chat interface and order tracking can be followed to track delivery 
                status of the products by the SELLER.</li></h6>
                </ul>`
            },
            {
                title: `How does the SELLER role work?`,
                content: `<h5>The SELLER will add the list of products they intend to sell on ProcEzy from the ProcEzy Database and 
                update their selling price regularly. Whenever a BUYER searches for a product, the ProcEzy search engine will 
                search for all SELLERS who sell the required product and list out all the SELLERS to the BUYER. This search result 
                is displayed based on “Lowest Price First”.</h5>
                <h5>The BUYERS can choose the SELLERS they want to work with and send them an enquiry or confirm orders with them.</h5>`
            },
            {
                title: `I am a BUYER from Bangalore and none of the suppliers have stock of the product in Bangalore. How can ProcEzy help me?`,
                content: `<h5>ProcEzy can help you to extend your search to other cities across India and connect you with SELLERS who 
                have stock of the product or are selling this product.  With this feature, you will be able to connect with many 
                SELLERS across the country to get the best prices and improve your business.</h5>`
            },
            {
                title: `I am a SELLER from Mumbai and I have a stock of some products with good pricing, but I am unable to sell my 
                inventory as I don’t know the BUYERS who are purchasing this product. How can ProcEzy help me?`,
                content: `<h5>Whenever a BUYER searches for a product and chooses “Pan-India” as their search location, All SELLERS having 
                the product as part of their SALES-CATALOGUE will be shown to the BUYER in the search results and the BUYER will be 
                able to directly communicate over chat with the SELLER without any interference or restrictions by the ProcEzy 
                marketplace</h5>`
            },
            {
                title: `I am a System Integrator and I need product pricing to quote for a project. How can ProcEzy help me?`,
                content: `<h5>You can search through the ProcEzy database for the required products and check the prices offered by 
                SELLERS in your location or across the country. This should help you with pricing to make your proposal</h5>`
            },
            {
                title: `Today is a weekend and I need product pricing urgently. The requirement came up at the last minute. How can 
                ProcEzy help me?`,
                content: `<h5>ProcEzy is an Online Marketplace and is accessible 24x7 to registered members. On ProcEzy, SELLERS update 
                their selling prices on a regular basis. You can also see when the product price was last updated by the SELLER. 
                You can use the pricing from these SELLERS and use it to make your proposal to your client.</h5>
                <h5>This feature helps you to be more independent when you are working hard to generate business.</h5>`
            },
            {
                title: `I am a SELLER. I have many products. I want to assign each product to different sales team members as 
                they are trained to handle the technical and sales aspects of these products. How can ProcEzy help me?`,
                content: `<h5>At ProcEzy you can create different SELLER-AGENTS and assign different products to them based on PRODUCT 
                CATEGORY or PRODUCT SKU. When a BUYER sends an enquiry for a product to your organization, the ProcEzy system checks 
                for the SELLER-AGENT who as been assigned that particular product. It then routes the incoming enquiry or order to 
                the SELLER-AGENT for further actions or order execution. You, as the ADMIN of the SELLER ORGANIZATION, can see all 
                enquiries, orders and chats received by and made by your SELLER-AGENTS. This will help you to remain aware and 
                monitor your SALES TEAM effectively.</h5>`
            },
            {
                title: `I am a SELLER. I want to ensure that I can intervene in an ongoing PRODUCT-ENQUIRY between a BUYER and my 
                SELLER-AGENT and help my SELLER-AGENT to close the deal. Does ProcEzy have the feature to help me with this?`,
                content: `<h5>Yes, as an ADMIN, you can look into every enquiry and chat – Ongoing or Past chats – and intervene, by 
                typing in your response to the BUYER in the LIVE CHAT. Your chat will be clearly identified by you username and 
                your SELLER-AGENT and the BUYER will be able to read the CHAT messages posted by you.</h5>`
            },
            {
                title: `How do I register at ProcEzy?`,
                content: `<h5>You can visit the ProcEzy website https://www.procezy.com and select the “Register” option. Here you 
                will find “Register as a Buyer” and “Register as a Seller”. You can choose the type of role and start your 
                registration process.</h5>`
            },
            {
                title: `How long does the registration process take?`,
                content: `<h5>The registration process is a simple and straightforward process. It takes approximately 5 to 10 minutes 
                to enter the required details and submit them.</h5>`
            },
            {
                title: `What information am I expected to furnish at registration?`,
                content: `
                <ul>
                <h6><li>Organization Legal Name</li></h6>
                <h6><li>Organization Address </li></h6>
                <ul>
                <h6><li>Bill To address</li></h6>
                <h6><li>Ship To address</li></h6>
                </ul
                <h6><li><li>Organization GST Number</li></li></h6>
                <h6><li>Organization PAN Number</li></h6>
                <h6><li>Organization GST Certificate in PDF / Image file less than 2 MB size</li></h6>
                <h6><li>Organization PAN Card in PDF / Image file less than 2 MB size</li></h6>
                <h6><li>Contact Person Name</li></h6>
                <h6><li>Contact Person Email address and mobile phone number</li></h6>
                </ul>
                <p>Once you submit these details, your registration will be reviewed by the ProcEzy admin team and within 24 hours, 
                you should be able to get started on ProcEzy.</p>`
            }]
    }


    const [panels, onKeyDown] = usePanels({
        count: 18,
        idPrefix: "configuring-panels",
    });


    return (
        <div>
            <div className='help'>
                <h1>FAQs</h1>
                <div className='help__container'>
                    <ExpansionList onKeyDown={onKeyDown}>
                        <ExpansionPanel {...panels[0]} header='What is ProcEzy?'>
                            <h5>ProcEzy is India’s 1st marketplace designed for the IT Channel Partner ecosystem members.
                                The marketplace is accessible to registered members only. REGISTRATION IS FREE to all “IT Channel Partner
                                Ecosystem members”. </h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[1]} header='What do you mean by IT Channel Partner Ecosystem members?'>
                            <h5>An IT channel partner ecosystem includes all the businesses that are established with the goal to market,
                                sell, service, and support, IT products, software solutions, and services to customers. An example of all the IT
                                Channel Partner ecosystem members is given below.</h5>

                            <ul>
                                <h6><li>Hardware Reseller</li></h6>
                                <h6><li>System Integrator</li></h6>
                                <h6><li>Value Added Reseller</li></h6>
                                <h6><li>Local Original Equipment Manufacturer</li></h6>
                                <h6><li>Network Solutions Provider</li></h6>
                                <h6> <li>Network Systems Integrator</li></h6>
                                <h6><li>Regional Distributor </li></h6>
                                <h6><li>National Distributor</li></h6>
                                <h6><li>Independent Software Vendor (integrates systems with their solutions)</li></h6>
                                <h6><li>Managed Service Provider</li></h6>
                            </ul>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[2]} header='What does ProcEzy do?'>
                            <h5>ProcEzy makes the process of Buying and Selling IT products between partners easier by connecting
                                channel partners across India on a single platform.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[3]} header='Is ProcEzy Free to use?'>
                            <h5>Yes, ProcEzy is free to use for all registered IT Channel Partner Ecosystem members.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[4]} header='Should my organization be registered with the GST department 
                        to complete registration with ProcEzy?'>
                            <h5>Yes, ProcEzy requires that its users (organizations) are GST registered.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[5]} header='How does this ProcEzy work?'>
                            <h5>Only IT Channel Partner Ecosystem members can register their organization as a BUYER or SELLER.</h5>

                            <h5>Once their registration is approved by the marketplace administrator, they can start using the
                                marketplace to:</h5>
                            <ul>
                                <h6><li>As a BUYER - search for IT products that they need to source from other partners.</li></h6>
                                <h6><li>As a SELLER - sell IT products to other partners who are searching for IT products to meet
                                    their business demands.</li></h6>
                            </ul>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[6]} header='How do I register at ProcEzy?'>
                            <h5>You can visit the ProcEzy website https://www.procezy.com and select the “Register” option. Here you will
                                find “Register as a Buyer” and “Register as a Seller”. You can choose the type of role and start your registration
                                process</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[7]} header='How does the BUYER role work?'>
                            <h5>ProcEzy maintains a vast and growing database of IT products which is categorized by Product Type, Manufacturers,
                                Models & various SKUs under each model.</h5>
                            <h5>A BUYER can search for a product from the ProcEzy database and will be
                                shown a list of Sellers who are selling the product on ProcEzy.</h5>
                            <ul>
                                <h6><li>The BUYER can choose the seller depending on the prices and availability of the product.</li></h6>
                                <h6><li>The BUYER can chat directly with the SELLER organization and negotiate better pricing directly with the
                                    SELLER. Orders can be confirmed over the chat interface and order tracking can be followed to track delivery
                                    status of the products by the SELLER.</li></h6>
                            </ul>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[8]} header='How does the SELLER role work?'>
                            <h5>The SELLER will add the list of products they intend to sell on ProcEzy from the ProcEzy Database and
                                update their selling price regularly. Whenever a BUYER searches for a product, the ProcEzy search engine will
                                search for all SELLERS who sell the required product and list out all the SELLERS to the BUYER. This search result
                                is displayed based on “Lowest Price First”.</h5>
                            <h5>The BUYERS can choose the SELLERS they want to work with and send them an enquiry or confirm orders with them.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[9]} header='I am a BUYER from Bangalore and none of the suppliers have stock of the product in Bangalore. 
                        How can ProcEzy help me?'>
                            <h5>ProcEzy can help you to extend your search to other cities across India and connect you with SELLERS who
                                have stock of the product or are selling this product.  With this feature, you will be able to connect with many
                                SELLERS across the country to get the best prices and improve your business.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[10]} header='I am a SELLER from Mumbai and I have a stock of some products with good pricing, but I am unable to sell my 
                inventory as I don’t know the BUYERS who are purchasing this product. How can ProcEzy help me?'>
                            <h5>Whenever a BUYER searches for a product and chooses “Pan-India” as their search location, All SELLERS having
                                the product as part of their SALES-CATALOGUE will be shown to the BUYER in the search results and the BUYER will be
                                able to directly communicate over chat with the SELLER without any interference or restrictions by the ProcEzy
                                marketplace</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[11]} header='I am a System Integrator and I need product pricing to quote for a project. How can ProcEzy help me?'>
                            <h5>You can search through the ProcEzy database for the required products and check the prices offered by
                                SELLERS in your location or across the country. This should help you with pricing to make your proposal</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[12]} header='Today is a weekend and I need product pricing urgently. The requirement came up at the last minute. How can ProcEzy help me?'>
                            <h5>ProcEzy is an Online Marketplace and is accessible 24x7 to registered members. On ProcEzy, SELLERS update
                                their selling prices on a regular basis. You can also see when the product price was last updated by the SELLER.
                                You can use the pricing from these SELLERS and use it to make your proposal to your client.</h5>
                            <h5>This feature helps you to be more independent when you are working hard to generate business.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[13]} header='I am a SELLER. I have many products. I want to assign each product to different sales team members as 
                they are trained to handle the technical and sales aspects of these products. How can ProcEzy help me?'>
                            <h5>At ProcEzy you can create different SELLER-AGENTS and assign different products to them based on PRODUCT
                                CATEGORY or PRODUCT SKU. When a BUYER sends an enquiry for a product to your organization, the ProcEzy system checks
                                for the SELLER-AGENT who as been assigned that particular product. It then routes the incoming enquiry or order to
                                the SELLER-AGENT for further actions or order execution. You, as the ADMIN of the SELLER ORGANIZATION, can see all
                                enquiries, orders and chats received by and made by your SELLER-AGENTS. This will help you to remain aware and
                                monitor your SALES TEAM effectively.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[14]} header='I am a SELLER. I want to ensure that I can intervene in an ongoing PRODUCT-ENQUIRY between a BUYER and my 
                SELLER-AGENT and help my SELLER-AGENT to close the deal. Does ProcEzy have the feature to help me with this?'>
                            <h5>Yes, as an ADMIN, you can look into every enquiry and chat – Ongoing or Past chats – and intervene, by
                                typing in your response to the BUYER in the LIVE CHAT. Your chat will be clearly identified by you username and
                                your SELLER-AGENT and the BUYER will be able to read the CHAT messages posted by you.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[15]} header='How do I register at ProcEzy?'>
                            <h5>You can visit the ProcEzy website https://www.procezy.com and select the “Register” option. Here you
                                will find “Register as a Buyer” and “Register as a Seller”. You can choose the type of role and start your
                                registration process.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[16]} header='How long does the registration process take?'>
                            <h5>The registration process is a simple and straightforward process. It takes approximately 5 to 10 minutes
                                to enter the required details and submit them.</h5>
                        </ExpansionPanel>
                        <ExpansionPanel {...panels[17]} header='What information am I expected to furnish at registration?'>

                            <ul>
                                <h6><li>Organization Legal Name</li></h6>
                                <h6><li>Organization Address </li></h6>
                                <ul>
                                    <h6><li>Bill To address</li></h6>
                                    <h6><li>Ship To address</li></h6>
                                </ul>
                                <h6><li>Organization GST Number</li></h6>
                                <h6><li>Organization PAN Number</li></h6>
                                <h6><li>Organization GST Certificate in PDF / Image file less than 2 MB size</li></h6>
                                <h6><li>Organization PAN Card in PDF / Image file less than 2 MB size</li></h6>
                                <h6><li>Contact Person Name</li></h6>
                                <h6><li>Contact Person Email address and mobile phone number</li></h6>
                            </ul>
                            <p>Once you submit these details, your registration will be reviewed by the ProcEzy admin team and within 24 hours,
                                you should be able to get started on ProcEzy.</p>
                        </ExpansionPanel>
                    </ExpansionList>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;