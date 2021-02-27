import { ReactNode } from 'react';

export interface ChallengesProviderProps {
    children: ReactNode;
    level?: number;
    currentExperience?: number;
    challengesCompleted?: number;
}
