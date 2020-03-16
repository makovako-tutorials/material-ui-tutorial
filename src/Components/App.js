import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises as originalExercises } from "../store";

function App() {
    const [exercises, setExercises] = useState(originalExercises);
    
    const [category, setCategory] = useState();
    const [exercise, setExercise] = useState({});

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

    const handleCategorySelected = cat => {
        setCategory(cat);
    };

    const handleExerciseSelected = id => {
        setExercise(exercises.find(ex => ex.id === id));
    };

    const exercisesByMuscles = getExercisesByMuscles()
    

    return (
        <>
            <Header />
            <Exercises
                exercises={exercisesByMuscles}
                category={category}
                onSelect={handleExerciseSelected}
                exercise={exercise}
            />
            <Footer
                muscles={muscles}
                onSelect={handleCategorySelected}
                category={category}
            />
        </>
    );
}

export default App;
