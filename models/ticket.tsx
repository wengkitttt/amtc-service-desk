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

export interface TicketFormModel {
  customerName: string;
  customerEmail: string;
  customerContactNumber: string;
  ticketSubject: string;
  ticketDescription: string;
  status: string;
  ticketOwner: string;
  ticketPriority: string;
  estimateStartDate: Date;
  estimateEndDate: Date;
  actualStartDate: Date;
  actualEndDate: Date;
  ticketRemark: string;
}
