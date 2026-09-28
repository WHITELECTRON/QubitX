import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppRootState } from "../store";

/**
 * Pre-typed versions of useDispatch and useSelector.
 * Always use these instead of the raw hooks from react-redux.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: AppRootState) => T): T =>
  useSelector<AppRootState, T>(selector);
