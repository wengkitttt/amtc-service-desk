export interface TicketContainerModel {
  id: string;
  code: string;
  title: string;
  status: string;
  urgentLevel: string;
  createBy: string;
  createDate: Date;
}

export interface TicketNumberBoxModel {
  count: number;
  title: string;
}
