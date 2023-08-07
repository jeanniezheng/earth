import { useState } from "react";
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
export default function PlacesFormPage() {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState([]);
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [maxGuests, setMaxGuests] = useState(1);
    const [addedPhotos, setAddedPhotos] = useState([]);



    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }
    async function addNewPlace(ev) {
        ev.preventDefault();
        const placeData = {
            title, address,
            addedPhotos, description,
            perks, extraInfo,
            checkIn, checkOut,
            maxGuests
        }
        await axios.post('/places', placeData)

    }

    return (
        <div >

            <form onSubmit={addNewPlace}>
                {inputHeader("Title")}
                <input value={title} onChange={ev => setTitle(ev.target.value)} type="text" id="title" placeholder="title, for example: My lovely apt" />

                {inputHeader("Address")}
                <input value={address} onChange={ev => setAddress(ev.target.target)} type="text" id="address" placeholder="address, for example: 1234 s Henry Street" />

                {inputHeader("Photos")}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

                {inputHeader("Description")}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} />

                {inputHeader("Perks")}
                <Perks
                    selected={perks}
                    onChange={setPerks}
                />
                {inputHeader("Extra Info")}

                <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
                {inputHeader("Check in & out times")}
                <div className="grid gap-2 sm:grid-cols-3">
                    <div>
                        <h3 className="mt-2 -mb-1">Check in time</h3>

                        <input value={checkIn} onChange={ev => setCheckIn(ev.target.value)} type="text" placeholder="12:00PM" />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Check out time</h3>
                        <input value={checkOut} onChange={ev => setCheckOut(ev.target.value)} type="text" placeholder="5:00PM" />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Max number of guests</h3>
                        <input value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} type="number" placeholder="5 people" />
                    </div>
                </div>
                <button className="primary my-4">Save</button>
            </form>
        </div>
    )
}
