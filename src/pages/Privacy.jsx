import Nav from "../components/Nav";
import '../index.css'

export default function Privacy() {
  return (
    <>
        <Nav />
        <div className="privacy-page">
            <h1>Privacy Policy</h1>
            <ul className="privacy-list">
                <li className="privacy-item">We do not collect any personal data from our users.</li>
                <li className="privacy-item">All interactions with our website are anonymous.</li>
                <li className="privacy-item">We do not use cookies or tracking technologies.</li>
                <li className="privacy-item">Any data you voluntarily provide (e.g., through contact forms) is used solely for the purpose of responding to your inquiry.</li>
                <li className="privacy-item">We do not share, sell, or distribute any user data to third parties.</li>
                <li className="privacy-item">We implement standard security measures to protect any data you provide.</li>
                <li className="privacy-item">By using our website, you agree to this privacy policy.</li>
            </ul>
        </div>
    </>
    )
}