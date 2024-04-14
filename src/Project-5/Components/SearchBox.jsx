
import { FiSearch } from "react-icons/fi";
import {useState , useEffect} from "react"
import { AiFillPlusCircle } from "react-icons/ai";
import {collection , getDocs} from "firebase/firestore";
import { db } from "../config/firebase";
import { FaRegUser } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


export default function SearchBox(){
    let [contacts , setContacts] = useState([]);
    
    useEffect(() => {
        const getContacts = async () => {
            try {
                const contactsRef = collection(db , "contacts") ;//we are fetching the collection from the database
                const contactSnapshot = await getDocs(contactsRef);
                const contactLists = contactSnapshot.docs.map((doc) => {
                    return {
                        id: doc.id ,
                        ...doc.data(),
                    }
                }) ;
                console.log(contactLists);
                setContacts(contactLists);

            } catch (error) {
                console.log(error);
            }
        }
        getContacts();
    } , [])
    return(
        <>
        <div className="flex gap-2">
        <div className="flex relative flex-grow item-center">
            <FiSearch className="text-white text-3xl m-1 ml-1 absolute"/>
            <input  type="text" className="border bg-transparent rounded-md h-10 flex-grow pl-9 text-white "/>
        </div>
            <AiFillPlusCircle className="text-white text-5xl cursor-pointer "  />
        </div>
        <div>
            {contacts.map((contact) => {
                return (
                <div key={contact.id}>
                    <FaRegUser className="text-white"/>
                    <div className="text-white">
                        <h2 className="">{contact.name}</h2>
                        <p className="">{contact.email}</p>
                    </div>
                    <div>
                    <FaPenFancy />
                    <MdDelete />

                    </div>
                </div>
            )})}
        </div>
        </>
    )
}