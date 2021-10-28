import Bubble from "../../assets/img/rsz_analysis-blackboard-board-bubble-355952.JPG"
import Apple from "../../assets/img/rsz_apple-applications-apps-cell-phone-607812.jpg"
import Quiz from "../../assets/img/rsz_black-flat-screen-computer-monitor-1714208.jpg"
import Tinder from "../../assets/img/rsz_business-code-coding-computer-270360.jpg"
import Laptop from "../../assets/img/rsz_computer-desk-hand-laptop-374631.jpg"
import Ipad from "../../assets/img/rsz_space-grey-ipad-air-with-graph-on-brown-wooden-table-187041.jpg"

export const content = [
   {
        projects: ["VaxDash.us", "Ernie Ball Landing Page"],
        github: ["https://github.com/Lifeshack/vax-dash","https://github.com/nickgusd/Landing-Page" ],
        deployed: ["https://vaxdash.us/", "https://fathomless-basin-76735.herokuapp.com/"],
        description: [
            "This platform allows users to make an informed decision about whether or not to get the COVID-19 vaccine, view the vaccination progress, determine vaccine eligibility in their state, and locate vaccine clinics.",
            "This website is a product landing page inspired by my favorite guitar series, the Ernie Ball Music Man!"
        ],
        image: [Bubble, Apple]
    },
{
        projects: ["Music eXchange", "Tinder for Restaurants"],
        github: ["https://github.com/nickgusd/Muse-eXchange","https://github.com/tpacba/tinderforrestaurants" ],
        deployed: ["https://musicexchangev2.herokuapp.com/", "https://vast-lowlands-43566.herokuapp.com/"],
        description: [
            "An application that allows musicians and artists to their sell music and tutorials directly to their fans.",
            "An application that helps a group of people choose a restaurant through rounds of swiping, similar to Tinder UI. When the group narrows down the restaurants that they like to 1 restaurant, the group is presented with a match."
        ],
        image: [Quiz, Tinder]
    },
    {
        projects: ["Note-Taker", "Secure Travel App"],
        github: ["https://github.com/nickgusd/Note-Taker","https://github.com/edwardreyes29/project-1" ],
        deployed: ["https://protected-shore-03622.herokuapp.com/", "https://edwardreyes29.github.io/project-1/"],
        description: [
            "An application that has the ability to save, delete, and view old notes.",
            "A travel app that advises the user where they should travel based on Coronavirus risk recommendations, and provides the user with travel accommodation options."
        ],
        image: [Laptop, Ipad]
    },
]
