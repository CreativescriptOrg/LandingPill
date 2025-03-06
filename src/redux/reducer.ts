import { combineReducers } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
	curStep: string;
	totalStep: number;
	form: {
		name: string;
		businessType: string;
		businessName: string;
		hasLandingPage: boolean;
		email: string;
		website: string;
		metaData: string;
		optedFor: string;
		serviceType: string;
		performanceAnswers: Array<string>;
		lookFeelAnswers: Array<string>;
	};
}

const initialState: StepState = {
	curStep: "website",
	totalStep: 10,
	form: {
		name: "",
		businessType: "",
		businessName: "",
		hasLandingPage: true,
		email: "",
		website: "",
		metaData: "",
		optedFor: "",
		serviceType: "",
		performanceAnswers: [],
		lookFeelAnswers: [],
	},
};

const stepSlice = createSlice({
	name: "step",
	initialState,
	reducers: {
		setStep: (state, action: PayloadAction<string>) => {
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
