export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message?: string;
  service?: string;
  packageName?: string;
  consent: boolean;
};


