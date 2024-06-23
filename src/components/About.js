import React from 'react';



export default function About(props) {



    let myStyle = {
        color:props.mode==='dark'?'white':'black'
}


    return (
        <div className="container my-5">
            <h2 style={myStyle}>About Us</h2>
            <p style={myStyle}>Welcome to TextCraft - your ultimate text manipulation companion! Our app is designed to provide a seamless and powerful experience for all your text-related needs. Whether you're looking to convert text between lower and upper case, search for word meanings, clear unwanted text, or even convert text to speech, TextCraft has got you covered.</p><br/>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h1 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>Key Features</strong>
                        </button>
                    </h1>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>Case Conversion: </strong> Easily convert your text from lower case to upper case, upper case to lower case, and even to sentence case with just a few taps.
                            <br /><strong>Word Meaning Search: </strong> Instantly search and find meanings for words right within the app. Enhance your vocabulary and understanding effortlessly.
                            <br /><strong>Text Cleaning: </strong> Remove unwanted characters, spaces, or any other formatting issues in your text to make it clean and presentable.
                            <br /><strong>Text to Speech:</strong> Convert your text into natural-sounding speech. Listen to your notes, articles, or any text content on the go.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h1 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <strong>Why Choose TextCraft?</strong>
                        </button>
                    </h1>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>User-Friendly Interface:</strong> Our app is designed with simplicity in mind. Navigate through various features effortlessly and perform tasks quickly.
                            <br /><strong>Accurate and Reliable:</strong> We ensure that the text manipulations and word meanings are precise and up-to-date.
                            <br /><strong>Fast and Efficient:</strong> Perform all your text-related tasks in no time with our optimized and responsive app.
                            <br /><strong>Versatile Usage:</strong> Ideal for students, professionals, writers, and anyone who deals with text regularly.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h1 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            <strong>Our Mission</strong>
                        </button>
                    </h1>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            At TextCraft, our mission is to make text manipulation easy and accessible for everyone. We believe that working with text should be a hassle-free and enjoyable experience. Our team is dedicated to continually improving the app with new features and enhancements based on your feedback.
                        </div>
                    </div>
                </div><br/>
                <h3 style={myStyle}>Get in Touch</h3>
                <p style={myStyle}>We love hearing from our users! If you have any suggestions, feedback, or need assistance, please feel free to contact us at <a href="mailto:priyachowdhury06583@gmail.com">priyachowdhury06583@gmail.com</a>. Follow us on social media for updates and tips on getting the most out of TextCraft.</p>
                <p style={myStyle}>Thank you for choosing TextCraft! We hope you enjoy using our app as much as we enjoyed creating it for you.</p>
            </div>
        </div>
    );
}
