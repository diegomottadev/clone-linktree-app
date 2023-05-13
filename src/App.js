import logo from './logo.svg';
import './App.css';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import UserName from './components/UserName/UserName';
import Title from './components/Title/Title';
import HyperLink from './components/HiperLink/HyperLink';
import Subtitle from './components/Subtitle/Subtitle';
import Bio from './components/Bio/Bio';

function App() {
  return (
    <div className="">
         <section className="animated-background">
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
        </section>
        <ProfilePicture/>
        <UserName/>
        <Title/>
        <Subtitle/>

        <Bio/>
        <HyperLink/>
    </div>
  );
}

export default App;
