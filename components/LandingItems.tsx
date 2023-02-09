import { dummyData, Event } from "@/texts/common/dummy"
import Image from "next/image"
import { ChangeEvent, createContext, useContext, useEffect, useState } from "react"
import styled from "styled-components"

const LandingHeroDiv = styled.div`
    width: 100%;    
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EventsWrapper = styled.div`
    display: flex
    flex-direction: row;
    width: 100%;
    min-height: 80vh;
    padding: 80px 140px;
`

const EventHeader = styled.h1`
    font-size: 38px;
    text-align: center;
`

const SearchBarWrapper = styled.div`
    padding: 30px;
    margin: 0 auto;
`

const SearchBar = styled.input`
    width: 100%;
    padding: 8px;
`

const EventItem = styled.button`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    background-color: white;
    border: 0;
    cursor: pointer;
`

const EventDetails = styled.div`
    width: 100%;
    display: flex
    flex-direction: row;
    padding: 80px;
`

export const ParallaxHero = () => {
    return (
        <LandingHeroDiv>insert parallax here</LandingHeroDiv>
    )
}

interface EventContextInterface {
    searchString: string;
    setSearchString: (s: string) => void;
}

const defaultEventContext: EventContextInterface = {
    searchString: "",
    setSearchString: () => { },
}

const EventContext = createContext<EventContextInterface>(defaultEventContext);

const EventSearch = () => {
    const { setSearchString } = useContext(EventContext);

    return (
        <SearchBarWrapper>
            <SearchBar placeholder="Search" onChange={
                (e: ChangeEvent<HTMLInputElement>) => {
                    setSearchString(e.target.value);
                }
            } />
        </SearchBarWrapper>
    )
}

const EventThumbnail = (props: { imageUrl: string }) => {
    return (
        <Image src={props.imageUrl} width={300} height={300} alt={""} />
    )
}

const EventList = () => {

    if (dummyData.length === 0) {
        return (
            <div></div>
        )
    };

    return (
        <>
            {
                dummyData.map((item: Event) => {
                    return (
                        <EventItem id={item.id.toString()} onClick={() => { alert("put modal here pls") }}>
                            <EventThumbnail imageUrl={"https://picsum.photos/300"} />
                            <EventDetails>
                                <h3>{item.name}</h3>
                                <p>
                                    {item.description}
                                </p>
                            </EventDetails>
                        </EventItem>
                    )
                })
            }
        </>
    )
}

export const Events = () => {
    const [search, setSearch] = useState("");

    return (
        <EventContext.Provider
            value={{
                searchString: search,
                setSearchString: setSearch,
            }}
        >
            <EventsWrapper>
                <EventHeader>Upcoming Events</EventHeader>
                <EventSearch />
                <EventList />
            </EventsWrapper >
        </EventContext.Provider>
    )
}