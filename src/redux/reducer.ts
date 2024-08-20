import { combineReducers } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
	curStep: number;
	totalStep: number;
	form: {
		name: string;
		category: string;
		businessName: string;
		haveALandingPage: boolean;
		landingPageLink: string;
		scheduleCall: {
			selected: boolean;
			email: string;
			productLink: string;
		};
		buildOwn: {
			selected: boolean;
			email: string;
		};
	};
}

const initialState: StepState = {
	curStep: 1,
	totalStep: 6,
	form: {
		name: "",
		category: "",
		businessName: "",
		haveALandingPage: true,
		landingPageLink: "",
		scheduleCall: {
			selected: false,
			email: "",
			productLink: "",
		},
		buildOwn: {
			selected: false,
			email: "",
		},
	},
};

const stepSlice = createSlice({
	name: "step",
	initialState,
	reducers: {
		setStep: (state, action: PayloadAction<number>) => {
			state.curStep = action.payload;
		},
		setForm: (state, action: PayloadAction<StepState["form"]>) => {
			state.form = action.payload;
		},
	},
});

export const { setStep, setForm } = stepSlice.actions;

const rootReducer = combineReducers({
	step: stepSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
