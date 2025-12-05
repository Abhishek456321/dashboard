export interface Iuser {
  _id?: string;
  employeePhoto?: string;
  employeeName: string;
  email: string;

  googleId?: string;
  role?: string;
  dob?: Date;
  parentName?: string;
  citizenshipNumber?: string;
  citizenshipPhoto?: string;
  panNumber?: number;
  panPhoto?: string;
  contract?: string;
  dateOfJoining?: Date;
  designation?: string;
  leaveEarned?: number;
  leaveTakenPaid?: number;
  leaveTakenUnpaid?: number;
  salary?: number;
  allowance?: number;
  createdAt?: Date;
  updatedAt?: Date;
  completion?: boolean;
}
