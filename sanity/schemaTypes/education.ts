export default {
name: "education",
title: "Education",
type: "document",
fields:[
    {
        name: "institueName",
        title: "Institute Name",
        type: "string",
    },
    {
        name: "degreeName",
        title: "Degree Name",
        type: "string",
    },
    {
        name: "startingYear",
        title: "Starting Year",
        type: "string",
    },
    {
        name: "endingYear",
        title: "Ending Year",
        type: "string",
    },
],
} as const 