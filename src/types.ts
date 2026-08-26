export type StatusBadgeProps = {
    label: string;
    active: boolean;
    onClick: () => void;
};

export type Application = {
    id: number,
    company: string,
    position: string,
    status: string,
    appliedDate: Date,
    jobPostingUrl?: string,
    notes?: string
}