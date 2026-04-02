import { createContext } from "react";
import type { User } from "../types/UserType.ts";



export const UserContext = createContext<User | null>(null);

