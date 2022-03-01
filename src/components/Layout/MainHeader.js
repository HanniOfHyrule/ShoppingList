import classes from "./MainHeader.module.css";
import Image from "../Image/Fruits.jpg";

//Überschrift der App

function MainHeader() {
  return (
    <div>
      <header className={classes.mainheader}>
        <h1 className={classes.h1}>Shopping Card</h1>
      </header>
      <div className={classes.mainimage}>
        <img src={Image} alt="Lots of fruits on an rose desc." />
      </div>
    </div>
  );
}

export default MainHeader;
