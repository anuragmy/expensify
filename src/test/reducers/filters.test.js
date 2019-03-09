import filterReducer from "../../reducers/filters";
import moment from "moment";
import { start } from "repl";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should sort by amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should return date", () => {
  const currentSatate = {
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
    text: ""
  };

  const action = { type: "SORT_BY_DATE" };
  const state = filterReducer(currentSatate, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "this is my text";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set startDate", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate
  };

  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("should set endDate", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate
  };

  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
