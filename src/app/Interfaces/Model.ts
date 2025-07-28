export interface ProcessStep {
  step: number
  title: string
  desc: string
  iconPath: string
}

export interface Product {
  title: string
  description: string
  badges: string[]
  details: string
  gradient: string
  icon: string
}

export interface TeamMember {
  name: string
  role: string
  experience: string
  ownership?: string
}
export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface Tab {
  id: string
  label: string
}

export interface Supplier {
  name: string
  location: string
}