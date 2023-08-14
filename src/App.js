import styles from "./ctmCard.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io";
import { BiLogoInstagram } from "react-icons/bi";
import myimage from '../src/maa.jpg';
import myimage1 from '../src/satyam.jpg';
import myimage2 from '../src/sanskriti.jpg';

function App() {
  return(<div className={styles.box}>
    <h1>MY FAMILY</h1>
     <div className={styles.container}>
<div className={styles.ctmCard}>
    <div className={styles.imageContainer}>
    <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.6435-9/36318980_1732959700120648_9081608979028639744_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7a1959&_nc_ohc=ghAgGC2EVvUAX-nhHYx&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfC1_icpZkKcnvSmWX4RzZe5x0VR3PzO6Fwl_jAZ8Cw8pw&oe=6501AE36"/>
    </div>
    <div className={styles.detail}>
        <h4>HARENDRA KUMAR</h4>
     <h5><b>Assistant Professor FIITJEE</b></h5>
        <h5><b>+91-9470741727</b></h5>
    </div>
    <div className={styles.social}>
    <a href="mailto:harendra707@gmail.com"> <HiOutlineMail size={25} /></a>
    <a href="https://www.facebook.com/media/set/?set=a.100642440019057&type=3"><IoLogoFacebook size={25} /></a>
    <a href="https://www.instagram.com/harendra7972/"><BiLogoInstagram size={25} /></a>
    </div>
</div>
<div className={styles.ctmCard}>
<div className={styles.imageContainer}>
<img src={myimage}/>
</div>
<div className={styles.detail}>
    <h4>Rajkumari Devi</h4>
    <h5><b>All Rounder(HouseWife)</b></h5>
        <h5><b>+91-821012XX85</b></h5>
</div>
<div className={styles.social}>
    <a href="rajkumarih19@gmail.com"> <HiOutlineMail size={25} /></a>
    <a href="https://www.facebook.com/profile.php?id=100077708663015"><IoLogoFacebook size={25} /></a>
    <a href=""><BiLogoInstagram size={25} /></a>
</div>
</div>
<div className={styles.ctmCard}>
    <div className={styles.imageContainer}>
    <img  className={styles.vaibhav} src={myimage1}/>
    </div>
    <div className={styles.detail}>
        <h4>Satyam Kumar</h4>
        <h5><b>B.Tech, IIT KANPUR</b></h5>
        <h5><b>+91-7667967100</b></h5>
    </div>
    <div className={styles.social}>
       <a href="mailto:kumarharendra473@gmail.com"> <HiOutlineMail size={25} /></a>
        <a href="https://www.facebook.com/profile.php?id=100017244788546"><IoLogoFacebook size={25} /></a>
        <a href="https://instagram.com/_satyam_2004_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><BiLogoInstagram size={25} /></a>
    </div>
</div>
<div className={styles.ctmCard}>
    <div className={styles.imageContainer}>
    <img src={myimage2}/>
    </div>
    <div className={styles.detail}>
        <h4>Sanskriti Kumari</h4>
        <h5><b>Student @NDA</b></h5>
        <h5><b>+91-700457XXXX</b></h5>
    </div>
    <div className={styles.social}>
    <a href=""> <HiOutlineMail size={25} /></a>
    <a href=""><IoLogoFacebook size={25} /></a>
    <a href=""><BiLogoInstagram size={25} /></a>
    </div>
</div>
</div>
</div>)
}

export default App;
