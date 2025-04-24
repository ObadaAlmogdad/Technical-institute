import Link from "next/link";
import {FaFacebook,FaTelegram,FaInstagram,FaWhatsapp} from "react-icons/fa"

const so =[

    {icon:<FaFacebook/>,path:"https://www.facebook.com/I.T.I.Daraa"},
    {icon:<FaTelegram/>,path:"https://t.me/"},
    {icon:<FaWhatsapp/>,path:"https://www.whatsapp.com/"},
    {icon:<FaInstagram/>,path:"https://www.instagram.com/"},

]
const Social =({containerStyles, iconStyles})=> {
    return (
        <div className={containerStyles}>
            {so.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                ); 
            })}
    </div>
    );
};
export default Social