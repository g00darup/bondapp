import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const MealsContext =  React.createContext();
const todaysMeals = ["Baked Beans",
                      "Baked Sweet Potatoes",
                      "Baked Potatoes"];

const MealsProvider = ({children}) => {
    const [meals, setMealsList] = React.useState(todaysMeals);
    return (
        <div>
            <MealsContext.Provider value={{meals}}>
                {children}
            </MealsContext.Provider>
        </div>
    );
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;