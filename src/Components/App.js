import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises as originalExercises } from "../store";

function App() {
    const [exercises, setExercises] = useState(originalExercises);

    const getExercisesByMuscles = () => {
        return Object.entries(
            exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise;
                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise];
                return exercises;
            }, {})
        );
    };

    const exercisesByMuscles = getExercisesByMuscles()


    return (
        <>
            <Header />
            <Exercises exercises={exercisesByMuscles} />
            <Footer muscles={muscles} />
        </>
    );
}

export default App;
