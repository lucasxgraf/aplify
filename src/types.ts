export type StatusBadgeProps = {
    label: string;
    active: boolean;
    onClick: () => void;
}

export type Application = {
    id: number,
    company: string,
    position: string,
    status: Status,
    appliedDate: Date,
    jobPostingUrl?: string,
    notes?: string
}

export type FilterBarProps = {
  activeStatus: string;
  onStatusChange: (status: string) => void;
}

export type StatusbarProps = {
  activeStatus: string;
  onStatusChange: (status: string) => void;
  activeSort: string;
  onSortChange: (sort: string) => void;
}

export type Status = "Beworben" | "Interview" | "Angebot" | "Abgelehnt" | "Zurückgezogen";

export type ModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  onSubmit: (newApplication: Omit<Application, "id">) => void;
  activeApplication: Application | null;
}