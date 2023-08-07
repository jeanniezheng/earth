import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import PlacesFormPage from "./PlacesFormPage";
import axios from "axios";

export default function PlacesPage() {
    const { action } = useParams();
    // const [title, setTitle] = useState("");
    // const [address, setAddress] = useState("");
    // const [description, setDescription] = useState("");
    // const [perks, setPerks] = useState([]);
    // const [extraInfo, setExtraInfo] = useState([]);
    // const [checkIn, setCheckIn] = useState("")
    // const [checkOut, setCheckOut] = useState("")
    // const [maxGuests, setMaxGuests] = useState(1);
    // const [addedPhotos, setAddedPhotos] = useState([]);
    // const [redirectToPlacesList, setRedirectToPlacesList] = useState(false);

    // if (redirectToPlacesList && action !== 'new') {
    //     return <Navigate to={'/account/places'} />
    // }
    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">

                    <Link className="mt-10 inline-flex gap-1 bg-primary text-white px-6 py-2 rounded-full" to={"/account/places/new"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <PlacesFormPage />
            )}


        </div>
    )
}