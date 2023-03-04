export type CardProps = {
  icon: string
  title: string
  count: number
}

export type ListItemProps = {
  org: string
  username: string
  email: string
  phone: string
  date: string
  id: number
  status: string
}

export type PaginationProps = {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className: string
}

export type usePaginationPropsType = {
  totalCount: number
  pageSize: number
  siblingCount?: number
  currentPage: number
}

export type FilterPropsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  defaultFieldVal: {
    orgName: string;
    userName: string;
    email: string;
    createdAt: string;
    phoneNumber: string
    status: string;
  }
  filterFieldsVal: {
    orgName: string;
    userName: string;
    email: string;
    createdAt: string;
    phoneNumber: string
    status: string;
  }
  setFilterFieldsVal: React.Dispatch<React.SetStateAction<{
    orgName: string;
    userName: string;
    email: string;
    createdAt: string;
    phoneNumber: string
    status: string;
  }>>
}

export type GeneralDetailsProps = {
  firstName: string
  lastName: string
  phone: string
  email: string
  bvn: number
  gender: string
  maritalStatus: string
  children: string | number
  typeOfRes: string
  levelOfEdu: string
  employmentStatus: string
  secOfEmploment: string
  durOfEmployment: string
  officeMail: string
  monthlyIncome: string[]
  currency: string
  loanRepayment: string
  twitter: string
  facebook: string
  instagram: string
  guarantor: {
    fName: string
    lName: string
    phone: string
    email: string
    relationship: string
  }
}
