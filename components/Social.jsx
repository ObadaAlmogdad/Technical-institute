import Link from "next/link";
import {FaFacebook,FaTelegram,FaInstagram,FaWhatsapp} from "react-icons/fa"

const so =[

    {icon:<FaFacebook/>,path:"https://www.facebook.com/"},
    {icon:<FaTelegram/>,path:"https://t.me/"},
    {icon:<FaWhatsapp/>,path:"https://t.me/"},
    {icon:<FaInstagram/>,path:"https://t.me/"},

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