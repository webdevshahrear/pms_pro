# Property Management System
### Complete Product Requirements Document
> **Single-Organization · Non-SaaS · Enterprise Grade**
>
> `Laravel 12` · `MySQL` · `Bootstrap 5` · `jQuery` · `HTML5/CSS3/JS`
>
> Version 1.0 · 2026

---

## Table of Contents

1. [Product Overview](#section-1-product-overview)
2. [User Roles & Access Control](#section-2-user-roles--access-control)
3. [Public Website Pages](#section-3-public-website-pages)
4. [Login & Authentication](#section-4-login--authentication-structure)
5. [Property Management Module](#section-5-property-management-module)
6. [Owner & Flat Owner Management](#section-6-owner--flat-owner-management-module)
7. [Tenant Management Module](#section-7-tenant-management-module)
8. [Rent, Billing & Payment Module](#section-8-rent-billing--payment-module)
9. [Accounts & Finance Module](#section-9-accounts--finance-module)
10. [Maintenance & Complaint Module](#section-10-maintenance--complaint-module)
11. [Notice & Communication Module](#section-11-notice--communication-module)
12. [Document Management Module](#section-12-document-management-module)
13. [Visitor & Gate Management Module](#section-13-visitor--gate-management-module)
14. [Reports & Analytics Module](#section-14-reports--analytics-module)
15. [Ownership Change / Transfer Module](#section-15-ownership-change--transfer-module)
16. [Flat Sale / Rent Posting Module](#section-16-flat-sale--rent-posting-module)
17. [Role-Based Dashboard Structure](#section-17-role-based-dashboard-structure)
18. [Frontend UI/UX Direction](#section-18-frontend-uiux-direction)
19. [Database Planning](#section-19-database-planning)
20. [Laravel 12 Backend Architecture](#section-20-laravel-12-backend-architecture)
21. [Development Phases](#section-21-development-phases)
22. [Admin Panel Menu Structure](#section-22-admin-panel-menu-structure)
23. [Role-Wise Panel Menu Structure](#section-23-role-wise-panel-menu-structure)
24. [Real-World Workflow Examples](#section-24-real-world-workflow-examples)
25. [Future Improvement Ideas](#section-25-future-improvement-ideas)

---

## Section 1: Product Overview

### 1.1 System Purpose

The **Property Management System (PMS)** is a comprehensive, enterprise-grade software solution designed for a single property management organization. It centralizes the complete lifecycle management of real estate assets — from building registration and flat allocation to tenant billing, ownership transfer, maintenance, and financial reporting.

Unlike SaaS platforms that serve multiple clients, this system is purpose-built for **one organization**, giving it maximum control, customization, and data security.

---

### 1.2 Who Will Use It

| User Role | Primary Function |
|-----------|-----------------|
| **Admin** | Full system control, configuration, user management |
| **Property Owner** | View property performance, financials, listings |
| **Flat Owner** | Manage flat details, post sale/rent listings |
| **Manager** | Day-to-day operations, tenant management, billing, maintenance |
| **Tenant** | View bills, submit complaints, download receipts |

---

### 1.3 Business Problems Solved

- ❌ Eliminates manual rent tracking on spreadsheets or paper registers
- 📄 Digitizes tenant agreement and document management
- 🧾 Automates invoice and receipt generation with PDF export
- 🔐 Provides role-based access so each staff member sees only what they need
- 🏠 Offers flat owners a transparent self-service portal for listings and statements
- 📋 Creates a permanent audit trail for ownership transfers and financial transactions
- 🎫 Centralizes complaint management with ticket tracking and assignment
- 📊 Provides real-time dashboards and visual analytics for business intelligence

---

### 1.4 Business Value Proposition

For a property management company managing **50–500+ units**, manual systems create operational chaos. This PMS delivers:

| Benefit | Details |
|---------|---------|
| ⚡ **Operational Efficiency** | 70%+ reduction in admin workload through automation |
| ✅ **Financial Accuracy** | Zero billing errors with automated invoice calculation |
| ⚖️ **Legal Compliance** | Structured document storage for agreements and ownership deeds |
| 👁️ **Transparency** | Owners and tenants get real-time visibility into their data |
| 📈 **Scalability** | Architecture supports future growth from 50 to 5000 units |
| 🏆 **Professional Image** | Premium branded portal strengthens company reputation |

---

## Section 2: User Roles & Access Control

### 2.1 Role Architecture Overview

The system implements a hierarchical **Role-Based Access Control (RBAC)** model. Every authenticated user belongs to exactly one of 5 roles. Each role has a predefined set of permissions that determine visible modules, readable data, and writable records.

> 📌 Access is enforced at both **middleware** (route level) and **policy** (model level) in Laravel 12.

---

### 2.2 Admin — Full System Control

- **Can See:** All modules, all data, all users, all properties
- **Can Manage:** Users, roles, buildings, owners, tenants, billing, accounts, settings, reports, maintenance, listings, transfers, visitors, notices, documents
- **Cannot Access:** Nothing restricted
- **Dashboard:** Global KPI cards, revenue chart, occupancy rate, recent activity feed, quick actions, alert center

---

### 2.3 Property Owner — Read-Heavy + Own Property Operations

- **Can See:** Their own buildings/units, tenant list, rent income, maintenance status
- **Can Manage:** Own profile, view listings, view owner statements
- **Cannot Access:** Other owners' data, system settings, financial configuration
- **Dashboard:** Property portfolio cards, income summary, occupancy chart, maintenance alerts

---

### 2.4 Flat Owner — Self-Service Portal

- **Can See:** Their owned flats, tenant info, rent statements, maintenance requests
- **Can Manage:** Own flat details, post sale/rent listings, manage inquiries, view ownership docs, initiate ownership transfer
- **Cannot Access:** Other flats, building financials, admin settings
- **Dashboard:** Flat status cards, listing status, recent inquiries, outstanding dues

---

### 2.5 Manager — Operational Management

- **Can See:** All buildings, tenants, rent status, complaints, notices, visitor logs
- **Can Manage:** Tenants, billing, complaints, maintenance assignments, notices, visitors, income/expense entries, invoices, payments
- **Cannot Access:** User role management, system settings, ownership transfer approval
- **Dashboard:** Today's dues, pending complaints, expiring agreements, visitor log, collection summary

---

### 2.6 Tenant — Read-Only Self Service

- **Can See:** Own profile, own flat details, bills/invoices, payment history, notices
- **Can Manage:** Submit complaints, update personal profile, download receipts/agreements
- **Cannot Access:** Other tenants' data, financials, admin features
- **Dashboard:** Current bill card, payment history, active complaint status, notice board

---

## Section 3: Public Website Pages

### 3.1 Website Overview

The public-facing website serves as the **digital storefront** for the property management organization. Built with Bootstrap 5, it must be fully responsive and SEO-optimized.

---

### 3.2 Page: Home

- **Hero Section:** Full-width background with headline, subheadline, and dual CTA buttons (View Properties / Contact Us)
- **Stats Bar:** Animated counters — Total Buildings, Total Units, Happy Tenants, Years of Experience
- **Featured Properties:** Card grid of highlighted available flats/commercial units
- **Our Services:** Icon-based service tiles (Property Management, Maintenance, Security, Billing)
- **Why Choose Us:** 3-column benefit section with icons
- **Latest Notices:** Scrollable marquee or card list of recent announcements
- **Call to Action Banner:** 'List Your Property' or 'Find Your Home' full-width CTA
- **Footer:** Company info, quick links, social media, contact

> 📌 Dark navy navbar with white text. Hero uses parallax or video background. Primary CTA in bright accent blue.

---

### 3.3 Additional Pages

| Page | Description |
|------|-------------|
| **About Us** | Company story, mission, vision, team section, achievement timeline, partnerships |
| **Services** | Service cards: Residential, Commercial, Maintenance, Security, Financial Management |
| **Properties / All Units** | Filterable listing page with grid/list toggle, property cards, pagination |
| **Flats for Sale** | Filtered view with advanced filters (price range, beds, baths, floor, parking) |
| **Flats for Rent** | Same structure with additional rent-specific filters and availability badges |
| **Property Listing Details** | Full image gallery, property details, inquiry form, WhatsApp button, schedule visit |
| **Notice / Announcements** | Chronological list with title, date, category badge, expandable content |
| **Contact Us** | Contact form, address/phone/email blocks, Google Maps embed, office hours |
| **FAQs** | Accordion-style sections by category (Rental, Billing, Maintenance, Ownership, Listings) |
| **Login / Register** | Unified login page with role-aware redirect, CAPTCHA ready |

---

## Section 4: Login & Authentication Structure

### 4.1 Login Strategy

Use a **SINGLE unified login page** at `/login`. After authentication, Laravel's middleware checks the user's role and redirects to the appropriate dashboard.

> 📌 Do NOT create separate `/admin-login`, `/owner-login`, `/tenant-login` URLs. A single login with role-based redirect is the professional standard.

---

### 4.2 Login Page Design

- **Split-screen design:** Left side — property image/illustration, Right side — login form
- **Fields:** Email Address, Password
- **Checkbox:** Remember Me | **Link:** Forgot Password?
- Branded with company logo and name. Minimal, distraction-free layout.

---

### 4.3 Registration

- Self-registration is **LIMITED** — only available for Flat Owners and Tenants
- New registrations require **Admin approval** before access is granted
- Admin, Property Owner, and Manager accounts are created **exclusively by Admin**
- **Registration fields:** Full Name, Email, Phone, Role (Flat Owner / Tenant), Unit Reference

---

### 4.4 Role-Based Redirect After Login

| Role | Redirect URL |
|------|-------------|
| Admin | `/admin/dashboard` |
| Property Owner | `/owner/dashboard` |
| Flat Owner | `/flat-owner/dashboard` |
| Manager | `/manager/dashboard` |
| Tenant | `/tenant/dashboard` |

---

### 4.5 Session Security

- **Session driver:** `database` (for multi-server safety)
- **CSRF protection** on all forms
- **Session lifetime:** 2 hours with Remember Me option for 30 days
- Activity log records login time, IP address, device
- Admin can **force logout** any user
- **Failed login throttle:** 5 attempts = 15-minute lockout

---

## Section 5: Property Management Module

### 5.1 Module Overview

This module forms the **structural foundation** of the entire system. It manages the real estate hierarchy: `Buildings > Floors > Units`. Every tenant, owner, billing record, and maintenance ticket is anchored to a specific unit.

---

### 5.2 Building / Project Management

- Add/Edit/Archive buildings with: Name, Address, City, GPS coordinates
- **Building type:** Residential, Commercial, Mixed-Use
- Total floors, total units, built year, construction type
- **Amenities:** Elevator, Generator, CCTV, Rooftop, Gymnasium, etc.
- Building images and documents upload
- Assigned Manager per building
- **Building status:** Active / Under Maintenance / Archived

---

### 5.3 Floor Management

- Each building can have multiple floors (Basement, Ground, 1F, 2F…)
- Floor label, floor number (integer for sorting), description
- Floor plan image upload
- Total units per floor (auto calculated)

---

### 5.4 Unit / Flat / Shop / Office Management

- Unit number, type (Apartment / Shop / Office / Garage)
- Size in sq ft, bedrooms, bathrooms, balconies
- **Parking:** Yes/No, parking slot number
- **Furnishing status:** Furnished / Semi-Furnished / Unfurnished
- Assigned Flat Owner (linked to flat owners table)
- Monthly rent amount, service charge, default utility charges
- Unit-level images gallery (up to 20 images)
- Floor plan PDF/image upload per unit

---

### 5.5 Unit Status Tracking

| Status | Meaning |
|--------|---------|
| 🟢 **Vacant** | No current tenant, available for rent/sale |
| 🔵 **Occupied** | Currently rented by a tenant |
| 🟡 **Booked** | Reserved but agreement not signed yet |
| 🔴 **Under Maintenance** | Temporarily unavailable due to repairs |
| 🏷️ **For Sale** | Listed for purchase |
| ✅ **Sold** | Ownership transferred to new buyer |

> 📌 Status changes are automatically triggered by system events (e.g., agreement creation sets Occupied, move-out sets Vacant).

---

## Section 6: Owner & Flat Owner Management Module

### 6.1 Property Owner Management

- **Full profile:** Name, NID/Passport, Photo, Phone, Email, Address
- Linked properties/buildings owned
- Ownership documents upload (title deed, mutation certificate)
- Date of purchase, purchase price, current value
- **Owner statement:** monthly income from units
- **Contact preference:** Phone / WhatsApp / Email

---

### 6.2 Flat Owner Management

- Same profile fields as Property Owner
- Linked specific flat(s) with unit numbers
- Owner payout history
- Agreement copy with property owner (if applicable)
- Flat owner has a **self-service login portal**
- Can post flat for sale or rent via listing module

---

### 6.3 Ownership Records

- Start date and end date of ownership
- Transfer reference number and supporting document links
- Current owner flag

---

### 6.4 Owner Profile Management

- Admin can edit owner profiles at any time
- Owner can update contact info and profile photo
- Document re-upload if expired (NID, deed)
- **Admin approval** required for document changes

---

## Section 7: Tenant Management Module

### 7.1 Tenant Profile

| Field | Details |
|-------|---------|
| Personal Info | Full Name, Date of Birth, Gender, Nationality |
| Identity | NID / Passport Number and upload |
| Contact | Phone, Email, Permanent address |
| Professional | Occupation, Employer name |
| Emergency | Contact Name, Relationship, Phone |
| Household | Number of family members / co-occupants |

---

### 7.2 Rental Agreement

- Linked unit, flat owner, tenant
- Agreement start date and end date
- Monthly rent amount, security deposit, advance payment amount
- Agreement terms (text or PDF upload)
- Signed agreement document upload
- **Agreement status:** Active / Expired / Terminated
- **Renewal reminder:** 30 days before expiry

---

### 7.3 Move-In / Move-Out Tracking

- Move-in date, move-out date
- Move-in checklist (condition of unit at handover)
- Move-out inspection report
- Security deposit refund record
- Utility meter readings at move-in and move-out

---

### 7.4 Tenant History

- Full history of all past tenants per unit
- Previous agreements viewable by Admin and Manager
- Searchable tenant registry by name, phone, NID
- **Blacklist flag** for problematic tenants with reason

---

## Section 8: Rent, Billing & Payment Module

### 8.1 Billing Setup

- Monthly rent is pulled from the unit's agreed rental amount
- **Service charge:** fixed or percentage of rent
- **Utility bills:** Electricity, Gas, Water — manual entry or meter-based
- **Custom charges:** Cleaning fee, Parking fee, Internet, etc.
- **Late fee:** Configurable percentage after due date
- **Due date:** Configurable (e.g., 10th of every month)

---

### 8.2 Invoice Generation

- **Auto-generate** monthly invoices for all active tenants on billing cycle date
- Invoice includes: Invoice number, date, tenant name, unit, rent breakdown, total due
- **PDF download** with company letterhead and branding
- **Invoice status:** Draft / Sent / Partially Paid / Paid / Overdue
- Email notification on invoice creation

---

### 8.3 Payment Collection

- **Record payment:** Amount, date, method, reference number, notes
- **Supported methods:** Cash, Bank Transfer, bKash, Nagad, Rocket, Cheque
- Partial payment supported (remaining balance tracked automatically)
- **Receipt generation:** Auto-created PDF receipt on payment recording
- **Receipt number series** (e.g., `RCP-2025-00001`)
- Receipt email to tenant on payment recording

---

### 8.4 Due Tracking & Payment Records

- Overdue invoices **flagged automatically** after due date
- Late fee auto calculated and added to invoice
- Due report by unit, by building, by date range
- Admin and Manager see **color-coded due alerts** on dashboard
- Complete payment ledger per tenant, filterable by date range, method, status
- **Exportable to PDF and Excel**
- Reconciliation report: What was billed vs What was collected

---

## Section 9: Accounts & Finance Module

### 9.1 Income Management

- Automatic income entries created on payment recording
- Manual income entry for non-rent income (e.g., parking fees, event hall rent)
- **Income categories:** Rent, Service Charge, Utility, Advance, Late Fee, Other
- Link income to unit, building, and tenant

> 📌 Manager handles income entry and payment recording. Admin handles reports and financial oversight.

---

### 9.2 Expense Management

- **Expense entry:** Amount, date, category, description, receipt upload
- **Expense categories:** Maintenance, Staff Salary, Utility Bills, Cleaning, Security, Admin, Other
- Recurring expense tracking
- Manager enters expenses; **Admin audits and approves**
- Vendor/supplier tracking

---

### 9.3 Ledger

- Double-entry style general ledger view
- Filter by date, category, type (income/expense)
- Running balance display
- Export to PDF and Excel

---

### 9.4 Financial Reports

| Report | Description |
|--------|-------------|
| **Daily Collection Report** | All payments received today |
| **Monthly Summary** | Total income vs total expense vs net profit |
| **Annual P&L Report** | Full-year financial overview |
| **Outstanding Dues Report** | All unpaid/overdue invoices |
| **Owner Payout Statement** | Income from units minus management fee |
| **Expense Category Report** | Breakdown by category |
| **Building-wise Financial Report** | Per-building financial summary |

---

## Section 10: Maintenance & Complaint Module

### 10.1 Complaint / Request Submission

- **Tenant submits from portal:** Category, Title, Description, Photos
- **Categories:** Plumbing, Electrical, Structural, Cleaning, Pest Control, Security, Other
- **Priority:** Low / Medium / High / Emergency
- **Ticket number** auto-generated (e.g., `TKT-2025-00047`)
- Submission timestamp and tenant info auto-attached

---

### 10.2 Ticket Management (by Admin / Manager)

- Admin/Manager views all tickets with status filter
- Assign ticket to external vendor or note responsible person
- Set expected completion date and internal notes

| Status | Meaning |
|--------|---------|
| 🔴 **Open** | Newly submitted |
| 🟡 **Assigned** | Assigned to vendor/person |
| 🔵 **In Progress** | Work underway |
| ✅ **Completed** | Work finished |
| ⬜ **Closed** | Verified and closed |
| ❌ **Rejected** | Invalid or duplicate |

> 📌 Since there is no Maintenance Staff role, ticket assignment refers to external vendors or staff tracked outside the portal. Manager updates ticket status manually.

---

### 10.3 Work Order

- Auto-generated **work order PDF** when ticket is assigned
- Work order includes: Ticket details, assigned person, unit location, task description
- Printable/downloadable by Manager or Admin

---

### 10.4 Maintenance Cost & Resolution

- Admin or Manager enters cost incurred for each ticket
- Cost auto-linked to **expense module**
- **Cost breakdown:** Labor, Materials, Third-party service
- Full **audit trail** per ticket: who did what and when
- Tenant rates resolution after closure (1–5 star rating)
- Building-wise maintenance cost summary

---

## Section 11: Notice & Communication Module

### 11.1 Notice Posting

- Admin/Manager can post notices with: Title, Content (rich text), Category, Target Audience
- **Target Audience:** All, Specific Building, Specific Role (Tenants only, Owners only), etc.
- **Notice categories:** Utility Outage, Maintenance Work, Event, Policy Change, Holiday, Emergency
- Publish date and expiry date
- Published notices appear on the **public website** and within relevant dashboards

---

### 11.2 Notification Triggers

| Trigger | When |
|---------|------|
| 🗓️ **Rent Due Reminder** | Auto-trigger 7 days before due date |
| 📋 **Agreement Expiry** | Notice 30 days before agreement end |
| 🔧 **Maintenance Update** | When ticket status changes |
| 🧾 **New Invoice** | When invoice is generated |
| 🏷️ **Listing Approval** | When listing is approved or rejected |

System notification bell with **unread count** in dashboard.

---

## Section 12: Document Management Module

### 12.1 Document Types

| Document Type | Who Uploads | Who Can View |
|---------------|-------------|--------------|
| Ownership Deed | Admin | Admin, Owner |
| Tenant Agreement | Manager / Admin | Admin, Manager, Tenant |
| NID / Passport | Tenant / Owner (self) | Admin, Manager |
| Utility Bills | Manager / Admin | Admin, Manager, Tenant |
| Invoices | System (auto) | Admin, Manager, Tenant |
| Payment Receipts | System (auto) | Admin, Manager, Tenant |
| Transfer Deed | Admin | Admin, Owners involved |
| Work Orders | System (auto) | Admin, Manager |

---

### 12.2 Document Features

- Organized folder structure per entity (Unit, Tenant, Owner)
- **Upload formats:** PDF, JPG, PNG, DOCX (max 10MB per file)
- **PDF generation for:** Invoices, Receipts, Agreements, Work Orders
- **DomPDF** (Laravel) for server-side PDF generation with branding
- **Document versioning:** newer uploads do not delete older versions
- Expiry date tracking for NID, agreements
- Download with clean filename (e.g., `Invoice-RCP-2025-00001.pdf`)

---

## Section 13: Visitor & Gate Management Module

### 13.1 Visitor Log

Visitor logging is handled by **Manager or Admin** (no Security Guard role). Entry can be done from the manager dashboard.

- **Log fields:** Visitor Name, Phone, Host (which tenant/unit), Purpose, In-Time, Out-Time
- Visitor badge/gate pass printable
- Search visitor log by name, date, unit

---

### 13.2 Vehicle Management

- **Log vehicle:** Type, Number Plate, Owner/Driver Name, Unit visiting, In-Time, Out-Time
- Residential parking slot assignment for tenants/owners
- Unauthorized vehicle flag

---

### 13.3 Gate Pass

- Admin/Manager generates gate pass for authorized visitors
- **Gate pass includes:** Reference number, Name, Purpose, Valid date/time range
- Gate pass can be **printed or shown digitally**

---

## Section 14: Reports & Analytics Module

### 14.1 Available Reports

| Report Name | Description | Who Can Access |
|-------------|-------------|----------------|
| **Occupancy Report** | Occupied vs Vacant units per building | Admin, Manager |
| **Due Report** | All overdue invoices with tenant details | Admin, Manager |
| **Rent Collection Report** | Collections by date range, method, building | Admin, Manager |
| **Expense Report** | Expenses by category and date range | Admin |
| **Maintenance Report** | Tickets by status, category, cost, timeframe | Admin, Manager |
| **Owner Statement** | Income generated per owner's units minus fees | Admin, Owner |
| **Tenant Report** | Active tenants, expiring agreements, blacklisted | Admin, Manager |
| **Vacancy Report** | Units vacant more than X days | Admin, Manager |
| **Annual P&L** | Full year income vs expense summary | Admin |
| **Visitor Report** | Daily/monthly visitor and vehicle log | Admin, Manager |

---

### 14.2 Report Features

- **Date range filter** on all reports
- Building/unit level drill-down
- **Export to PDF** (branded, printable)
- **Export to Excel/CSV** for further analysis
- **Charts:** Bar, Line, Pie — rendered with Chart.js in browser
- Dashboard summary cards with real-time data

---

## Section 15: Ownership Change / Transfer Module

### 15.1 Transfer Request Flow

```
1. Current flat owner initiates Transfer Request from their portal
2. Fills in: New Owner Name, NID, Phone, Email, Transfer Date, Transfer Amount
3. Uploads: Transfer deed, NID copies of both parties, supporting documents
4. Status → Pending Review
5. Admin receives notification
6. Admin reviews documents and verifies information
7. Admin may request additional documents (status → Documents Requested)
8. Admin approves or rejects with reason
9. On Approval: System automatically transfers ownership to new owner
10. Previous owner's record is archived; new owner gets system access
11. Both parties receive confirmation notification
```

---

### 15.2 Transfer Status Workflow

| Status | Meaning | Triggered By |
|--------|---------|-------------|
| **Draft** | Saved but not submitted | Flat Owner |
| **Pending Review** | Submitted, awaiting admin | Flat Owner (submit action) |
| **Documents Requested** | Admin needs more docs | Admin |
| **Under Verification** | Admin actively reviewing | Admin |
| **Approved** | Transfer completed | Admin |
| **Rejected** | Transfer denied with reason | Admin |

---

### 15.3 Ownership History

- Every unit has a full **chain-of-title:** Owner 1 > Owner 2 > Owner 3
- Date ranges of each ownership period stored
- Admin can view full **ownership audit trail** for any unit
- No records are ever deleted — only archived

---

## Section 16: Flat Sale / Rent Posting Module

### 16.1 Listing Creation — Flat Owner Flow

```
1. Flat owner logs in → My Listings → Create New
2. Selects listing type: For Sale / For Rent
3. Fills in listing form with all details
4. Uploads images (up to 15 photos), optionally video URL and floor plan
5. Saves as Draft OR Submits for Admin Review
6. Status → Pending Approval
```

---

### 16.2 Listing Form Fields

| Field | Type | Required |
|-------|------|----------|
| Listing Type | Dropdown (Sale/Rent) | ✅ Yes |
| Title | Text | ✅ Yes |
| Price / Monthly Rent | Number | ✅ Yes |
| Advance Amount | Number | No |
| Unit Size (sq ft) | Number | ✅ Yes |
| Bedrooms | Number | ✅ Yes |
| Bathrooms | Number | ✅ Yes |
| Balcony | Yes/No | No |
| Floor Number | Number | ✅ Yes |
| Parking Available | Yes/No | No |
| Availability Date | Date picker | ✅ Yes |
| Furnishing Status | Dropdown | No |
| Description | Rich text | ✅ Yes |
| Image Gallery | Multi-file upload | ✅ Yes (min 3) |
| Video URL | URL field | No |
| Floor Plan | File upload | No |

---

### 16.3 Listing Status Flow

| Status | Meaning |
|--------|---------|
| **Draft** | Saved by owner, not yet submitted |
| **Pending** | Submitted, awaiting admin approval |
| **Approved** | Admin approved, pending publication |
| **Published** | Live on public website |
| **Paused** | Hidden from public by owner or admin |
| **Expired** | Validity period ended |
| **Sold / Rented** | Marked as completed by owner |
| **Rejected** | Admin rejected with reason |

---

### 16.4 Inquiry Management

- Website visitors submit inquiry form on listing detail page
- **Inquiry saved with:** Name, Phone, Email, Message, Listing reference
- Flat owner and Admin both notified of new inquiry
- Flat owner can respond to inquiries from portal

| Status | Meaning |
|--------|---------|
| **New** | Just submitted |
| **Contacted** | Owner reached out |
| **Visited** | Property visit scheduled/done |
| **Converted** | Deal closed |
| **Closed** | Inquiry archived |

---

## Section 17: Role-Based Dashboard Structure

### 17.1 Admin Dashboard

**Summary Cards:**
`Total Buildings` · `Total Units` · `Occupied` · `Vacant` · `Pending Dues` · `Monthly Collection`

**Charts:**
- Monthly Revenue vs Expense (12-month bar chart)
- Occupancy Rate Donut Chart

**Quick Actions:**
`Add New Tenant` · `Generate Invoices` · `Post Notice` · `View Reports`

**Tables:**
- Recent Payments (last 10)
- Overdue Invoices
- Pending Approvals (listings, transfers)

**Sidebar Modules:** Dashboard, Buildings, Units, Owners, Tenants, Billing, Accounts, Maintenance, Listings, Transfers, Visitors, Notices, Documents, Reports, Users, Settings

---

### 17.2 Manager Dashboard

**Summary Cards:**
`Active Tenants` · `Today's Collections` · `Open Complaints` · `Expiring Agreements`

**Tables:** Today's Due List · New Complaints · Recent Move-ins

**Quick Actions:** `New Tenant` · `Record Payment` · `Update Ticket` · `Post Notice` · `Log Visitor`

---

### 17.3 Property Owner Dashboard

**Summary Cards:**
`My Buildings` · `Total Units` · `Occupancy Rate` · `Monthly Income`

**Tables:** My Buildings & Units · Income Summary · Maintenance Status

**Quick Actions:** `View Statement` · `View Tenants`

---

### 17.4 Flat Owner Dashboard

**Summary Cards:**
`My Flats` · `Active Listings` · `Pending Inquiries` · `Maintenance Open`

**Tables:** My Flats & Current Tenants · My Active Listings · Recent Inquiries

**Quick Actions:** `Post New Listing` · `View My Statement` · `Initiate Transfer`

---

### 17.5 Tenant Dashboard

**Summary Cards:**
`Current Month Bill` · `Last Payment Date` · `Active Complaint` · `Agreement End Date`

**Tables:** Recent Invoices · Payment History · My Complaints

**Quick Actions:** `Submit Complaint` · `Download Receipt` · `View Notice Board`

---

## Section 18: Frontend UI/UX Direction

### 18.1 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary Navy** | `#1E3A5F` | Navbar, headings, sidebar, footer |
| **Accent Blue** | `#2B7BE8` | Buttons, links, active states, charts |
| **Light Blue BG** | `#EBF3FF` | Card backgrounds, section highlights |
| **Success Green** | `#16A34A` | Paid badges, success states, active |
| **Warning Amber** | `#D97706` | Due badges, pending states |
| **Danger Red** | `#DC2626` | Overdue badges, delete actions, alerts |
| **Dark Text** | `#1A1A2E` | Primary body text |
| **Medium Gray** | `#6B7280` | Secondary text, placeholders |
| **Light Gray BG** | `#F3F4F6` | Page backgrounds, table stripes |
| **White** | `#FFFFFF` | Card surfaces, modal backgrounds |

---

### 18.2 Typography

| Element | Specification |
|---------|--------------|
| **Primary Font** | Inter (Google Fonts) — clean, professional, highly readable |
| **Fallback** | Arial, sans-serif |
| **H1** | 2.5rem |
| **H2** | 2rem |
| **H3** | 1.5rem |
| **H4** | 1.25rem |
| **Body** | 16px / 1.6 line height |
| **Font Weights** | 400 (body) · 500 (labels) · 600 (subheadings) · 700 (headings) · 800 (hero) |

---

### 18.3 Dashboard Layout

- **Sidebar:** Fixed left, 260px wide, dark navy background, icon + label menu items
- **Sidebar active state:** Accent blue left border + light blue background
- **Topbar:** White/light gray, user avatar + name, notification bell, logout
- **Content area:** Light gray background with white card components
- **Responsive:** Sidebar collapses to icon-only on tablets, drawer on mobile

---

### 18.4 Key UI Components

| Component | Specification |
|-----------|--------------|
| **Cards** | White, border-radius 12px, subtle box-shadow, 24px padding |
| **Tables** | Bootstrap 5 table-hover, navy header, alternating rows, DataTables.js |
| **Forms** | Floating labels, Select2.js dropdowns, Flatpickr dates, Dropzone.js uploads |
| **Buttons** | Primary (solid blue), Secondary (outlined navy), Danger (red), Success (green), Ghost |
| **Status Badges** | Colored pill badges with custom colors per status |

---

## Section 19: Database Planning

### 19.1 Architecture Overview

MySQL relational database with proper foreign keys, indexes on frequently queried columns, and soft deletes on critical tables.

- All **monetary values** stored as `DECIMAL(12,2)`
- All **dates** stored as `DATE` or `TIMESTAMP` (UTC)

---

### 19.2 Core Tables

#### `users`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | Auto increment |
| `name` | `VARCHAR(255)` | Full name |
| `email` | `VARCHAR(255) UNIQUE` | Login email |
| `password` | `VARCHAR(255)` | Bcrypt hashed |
| `role` | `ENUM` | admin, owner, flat_owner, manager, tenant |
| `phone` | `VARCHAR(20)` | Contact number |
| `profile_photo` | `VARCHAR(255)` | File path |
| `status` | `ENUM` | active, inactive, suspended |
| `last_login_at` | `TIMESTAMP` | For security logs |
| `created_at / updated_at` | `TIMESTAMP` | Laravel defaults |

#### `buildings`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `name` | `VARCHAR(255)` | Building name |
| `address` | `TEXT` | Full address |
| `city` | `VARCHAR(100)` | |
| `total_floors` | `INT` | |
| `building_type` | `ENUM` | residential, commercial, mixed |
| `manager_id` | `FK -> users.id` | Assigned manager |
| `status` | `ENUM` | active, maintenance, archived |
| `amenities` | `JSON` | Array of amenities |
| `cover_image` | `VARCHAR(255)` | |

#### `units`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `building_id` | `FK -> buildings.id` | |
| `floor_id` | `FK -> floors.id` | |
| `unit_number` | `VARCHAR(50)` | e.g., 4A |
| `unit_type` | `ENUM` | apartment, shop, office, garage |
| `size_sqft` | `DECIMAL(10,2)` | |
| `bedrooms / bathrooms / balconies` | `INT` | |
| `parking` | `BOOLEAN` | |
| `flat_owner_id` | `FK -> users.id` | Current flat owner |
| `status` | `ENUM` | vacant, occupied, booked, maintenance, for_sale, sold |
| `monthly_rent` | `DECIMAL(12,2)` | Default rent amount |
| `service_charge` | `DECIMAL(12,2)` | |

#### `rental_agreements`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `unit_id` | `FK -> units.id` | |
| `tenant_id` | `FK -> users.id` | |
| `start_date / end_date` | `DATE` | |
| `monthly_rent` | `DECIMAL(12,2)` | Agreed rent |
| `security_deposit` | `DECIMAL(12,2)` | |
| `advance_amount` | `DECIMAL(12,2)` | |
| `status` | `ENUM` | active, expired, terminated |
| `agreement_document` | `VARCHAR(255)` | Signed PDF path |

#### `invoices`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `invoice_number` | `VARCHAR(50) UNIQUE` | e.g., INV-2025-00001 |
| `agreement_id` | `FK -> rental_agreements.id` | |
| `tenant_id` | `FK -> users.id` | |
| `unit_id` | `FK -> units.id` | |
| `rent_amount / service_charge / utility_charge / late_fee / total_amount` | `DECIMAL(12,2)` | |
| `due_date` | `DATE` | |
| `status` | `ENUM` | draft, sent, partial, paid, overdue |

#### `payments`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `invoice_id` | `FK -> invoices.id` | |
| `receipt_number` | `VARCHAR(50) UNIQUE` | e.g., RCP-2025-00001 |
| `amount_paid` | `DECIMAL(12,2)` | |
| `payment_date` | `DATE` | |
| `payment_method` | `ENUM` | cash, bank, bkash, nagad, rocket, cheque |
| `reference_number` | `VARCHAR(100)` | Transaction ref |
| `recorded_by` | `FK -> users.id` | Manager or Admin |
| `notes` | `TEXT` | |

#### `ownership_transfers`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `unit_id` | `FK -> units.id` | |
| `from_owner_id` | `FK -> users.id` | Current owner |
| `to_owner_id` | `FK -> users.id` | New owner |
| `transfer_date` | `DATE` | |
| `transfer_amount` | `DECIMAL(12,2)` | Sale amount |
| `status` | `ENUM` | draft, pending, docs_requested, under_review, approved, rejected |
| `admin_notes` | `TEXT` | |
| `approved_by` | `FK -> users.id` | Admin who approved |
| `approved_at` | `TIMESTAMP` | |

#### `listings`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `unit_id` | `FK -> units.id` | |
| `posted_by` | `FK -> users.id` | Flat owner |
| `listing_type` | `ENUM` | sale, rent |
| `title` | `VARCHAR(255)` | |
| `price` | `DECIMAL(12,2)` | |
| `description` | `LONGTEXT` | |
| `availability_date` | `DATE` | |
| `status` | `ENUM` | draft, pending, approved, published, paused, expired, sold, rejected |
| `published_at / expires_at` | `TIMESTAMP` | |

#### `maintenance_tickets`

| Column | Type | Notes |
|--------|------|-------|
| `id` | `BIGINT UNSIGNED PK` | |
| `ticket_number` | `VARCHAR(50) UNIQUE` | TKT-2025-00001 |
| `unit_id` | `FK -> units.id` | |
| `submitted_by` | `FK -> users.id` | Tenant or Admin/Manager |
| `category` | `ENUM` | plumbing, electrical, structural, cleaning, pest, security, other |
| `priority` | `ENUM` | low, medium, high, emergency |
| `title / description` | `VARCHAR / TEXT` | |
| `assigned_to_name` | `VARCHAR(255)` | External vendor or person name |
| `status` | `ENUM` | open, assigned, in_progress, completed, closed, rejected |
| `cost_incurred` | `DECIMAL(12,2)` | |
| `resolved_at` | `TIMESTAMP` | |

---

## Section 20: Laravel 12 Backend Architecture

### 20.1 Key Folder Structure

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── Admin/
│   │   ├── Manager/
│   │   ├── Owner/
│   │   ├── FlatOwner/
│   │   └── Tenant/
│   ├── Middleware/
│   │   ├── RoleMiddleware.php
│   │   └── ActiveUserMiddleware.php
│   └── Requests/
│       ├── StoreUnitRequest.php
│       └── RecordPaymentRequest.php
├── Models/           ← One Eloquent model per table
├── Services/
│   ├── InvoiceService.php
│   ├── PaymentService.php
│   ├── PDFService.php
│   ├── OwnershipTransferService.php
│   ├── ListingService.php
│   └── NotificationService.php
└── Notifications/
    ├── RentDueNotification.php
    ├── TicketUpdateNotification.php
    └── InvoiceGeneratedNotification.php

storage/app/public/
├── tenants/
├── owners/
├── listings/
└── documents/

resources/views/
├── admin/
├── manager/
├── owner/
├── flat-owner/
├── tenant/
└── pdf/    ← Invoice, receipt, agreement, work order templates
```

---

### 20.2 Middleware Strategy

```php
// Middleware stack
'auth'        → Laravel default, blocks unauthenticated access
'role:admin'  → Custom middleware, checks user role
'active'      → Checks user status is 'active' before allowing access

// Route grouping example
Route::middleware(['auth', 'role:manager'])
     ->prefix('manager')
     ->group(...);
```

---

### 20.3 Service Classes

| Service | Responsibility |
|---------|---------------|
| `InvoiceService` | Generates monthly invoices for all active agreements |
| `PaymentService` | Records payment, updates invoice status, creates receipt, logs income |
| `PDFService` | Wraps DomPDF to generate branded invoices, receipts, reports |
| `OwnershipTransferService` | Manages transfer approval workflow and ownership reassignment |
| `ListingService` | Handles listing approval, publication, and expiry logic |
| `NotificationService` | Central dispatcher for all system notifications |

---

### 20.4 PDF Generation & File Uploads

- **Package:** `barryvdh/laravel-dompdf`
- Each PDF template uses company branding (logo, colors, fonts)
- Stored in `storage/` and linked in `documents` table, downloadable via signed route URLs
- Uploads validated: `mimes`, max size (10MB), image dimensions
- Stored in `storage/app/public/` with UUID-based filenames
- Images compressed before storage using **Intervention Image** package

---

## Section 21: Development Phases

| Phase | What to Build | Priority | Est. Duration |
|-------|--------------|----------|---------------|
| **Phase 1** | Auth system, 5-role management, user CRUD, login/logout, password reset, role-based redirect | 🔴 Critical | 1–2 weeks |
| **Phase 2** | Public website (Home, About, Contact, Notices), responsive layout, branding setup | 🟠 High | 1–2 weeks |
| **Phase 3** | Buildings, Floors, Units — full CRUD, status tracking, media upload, admin panel | 🔴 Critical | 2 weeks |
| **Phase 4** | Property Owners, Flat Owners, ownership records, document upload, owner portals | 🟠 High | 1–2 weeks |
| **Phase 5** | Tenants — profile, agreements, move-in/out, document upload, tenant portal | 🔴 Critical | 2 weeks |
| **Phase 6** | Billing — invoice generation, payment recording, receipt PDF, due tracking | 🔴 Critical | 2–3 weeks |
| **Phase 7** | Accounts — income/expense entry, ledger, financial reports, owner statements | 🟠 High | 1–2 weeks |
| **Phase 8** | Maintenance — complaint submission, ticket management, work orders, cost tracking | 🟠 High | 1–2 weeks |
| **Phase 9** | Notices, notification system, dashboard alerts | 🟡 Medium | 1 week |
| **Phase 10** | Listings — flat owner posting, admin approval, public listing pages, inquiries | 🟠 High | 2 weeks |
| **Phase 11** | Ownership Transfer — request flow, document upload, admin approval, history | 🟠 High | 1–2 weeks |
| **Phase 12** | Visitor/Gate management module, visitor log, vehicle log, gate pass | 🟡 Medium | 1 week |
| **Phase 13** | Reports & Analytics — all report types, charts, export PDF/Excel | 🟠 High | 2 weeks |
| **Phase 14** | Document management module, centralized document center, PDF polish | 🟡 Medium | 1 week |
| **Phase 15** | Testing, bug fixing, performance optimization, UI polish, deployment setup | 🔴 Critical | 2–3 weeks |

**Total Estimated Duration: ~25–35 weeks**

---

## Section 22: Admin Panel Menu Structure

```
📊 Dashboard

🏢 Properties
   ├── Buildings (List, Add, Edit, View)
   ├── Floors (List per building)
   └── Units (List, Add, Edit, Status, Media)

👥 Owners
   ├── Property Owners (List, Add, Edit, View Profile, Documents)
   └── Flat Owners (List, Add, Edit, View Profile, Statements)

🏠 Tenants
   ├── All Tenants (List, Profile, Documents, History)
   ├── Agreements (Active, Expiring, Expired)
   └── Move-In / Move-Out

💰 Billing
   ├── Invoices (Generate, List, View, PDF)
   ├── Payments (Record, List, Receipt)
   └── Due Report (Overdue, Partial)

📒 Accounts
   ├── Income (List, Add Entry)
   ├── Expenses (List, Add Entry, Categories)
   ├── Ledger
   └── Reports (Daily, Monthly, Annual, Owner Statement)

🔧 Maintenance
   ├── Tickets (All Tickets, Assign, Status)
   ├── Work Orders
   └── Maintenance Cost Summary

🏷️ Listings
   ├── Pending Approval
   ├── All Listings (Published, Paused, Expired)
   └── Inquiries

🔄 Ownership Transfer
   ├── Transfer Requests (Pending, Under Review)
   └── Transfer History

📢 Notices
   ├── Post Notice
   └── All Notices

🚪 Visitors & Gate
   ├── Visitor Log
   ├── Vehicle Log
   └── Gate Passes

📁 Documents
   ├── All Documents
   └── Upload Document

📈 Reports
   Occupancy · Due · Collection · Expense · Maintenance · Tenant · Vacancy · P&L

👤 Users & Roles
   ├── All Users
   ├── Add New User
   └── Roles & Permissions

⚙️ Settings
   Company Profile · Billing Config · Notification Settings · System Logs
```

---

## Section 23: Role-Wise Panel Menu Structure

### 23.1 Property Owner Menu

```
📊 Dashboard
🏢 My Properties — Building details, Unit list
💵 Financial Overview — Income summary, Payout statement
👥 Tenants — View active tenants per unit
🔧 Maintenance — Status in my buildings
📢 Notices — View notices
👤 Profile — Edit profile, change password
```

---

### 23.2 Flat Owner Menu

```
📊 Dashboard
🏠 My Flats — Unit details, status, current tenant
🏷️ My Listings — Create, manage, pause, delete listings
📩 Inquiries — View and respond to listing inquiries
🔄 Ownership Transfer — Initiate new transfer, view history
💵 Statements — Rental income, payout records
📢 Notices — View relevant notices
👤 Profile
```

---

### 23.3 Tenant Menu

```
📊 Dashboard
🏠 My Unit — Flat details, building info
🧾 My Bills — Invoice list, due amounts
💳 Payments — Payment history, download receipts
🎫 Complaints — Submit new, view my complaints status
📁 Documents — My agreement, NID, receipts download
📢 Notices — Relevant building notices
👤 Profile
```

---

### 23.4 Manager Menu

```
📊 Dashboard
🏢 Buildings & Units — View all, update status
👥 Tenants — List, add, edit, agreements, move-in/out
💰 Billing — Invoices, record payments, due list
📒 Accounts — Income entries, expense entries, ledger
🔧 Maintenance — All tickets, update status, work orders
📢 Notices — Post and manage
🚪 Visitors — Log visitor, vehicle log, gate passes
📈 Reports — Occupancy, due, collection, tenant reports
👤 Profile
```

---

## Section 24: Real-World Workflow Examples

### 24.1 New Tenant Move-In Process

```
Step 1  → Admin/Manager creates Tenant profile with personal info and documents
Step 2  → Manager creates Rental Agreement (tenant ↔ unit)
Step 3  → Signed agreement PDF is uploaded
Step 4  → Advance payment and security deposit recorded
Step 5  → Unit status auto-changes: Vacant → Occupied
Step 6  → Tenant receives login credentials via email
Step 7  → Tenant can access portal to view bills and submit complaints
Step 8  → First invoice auto-generated on next billing cycle
```

---

### 24.2 Monthly Rent Collection Process

```
Step 1  → System auto-generates invoices for all active tenants on billing date
Step 2  → Tenants see new invoice on their portal dashboard
Step 3  → Manager opens the Payments module
Step 4  → Selects tenant/invoice → clicks "Record Payment"
Step 5  → Enters: Amount, Date, Payment Method, Transaction Reference
Step 6  → System marks invoice as Paid (or Partial)
Step 7  → PDF Receipt auto-generated and linked to the payment
Step 8  → Income entry automatically created in Accounts module
Step 9  → Tenant can download receipt from their portal
```

---

### 24.3 Maintenance Complaint Process

```
Step 1  → Tenant: Complaints → Submit New
Step 2  → Fills: Category, Priority, Title, Description, Photos
Step 3  → Ticket created with unique number (TKT-YYYY-NNNNN)
Step 4  → Admin and Manager notified
Step 5  → Manager assigns to vendor, sets expected date
Step 6  → Manager updates status → In Progress, adds notes
Step 7  → On completion: Manager marks Completed with cost and resolution
Step 8  → Cost auto-linked to Expense module
Step 9  → Tenant notified: complaint resolved
Step 10 → Tenant rates resolution (1-5 stars)
```

---

### 24.4 Ownership Transfer Process

```
Step 1  → Flat owner: Ownership Transfer → New Transfer
Step 2  → Fills new owner details, transfer date, amount
Step 3  → Uploads: Transfer deed, NID of both parties
Step 4  → Submits request (status: Pending Review)
Step 5  → Admin notified
Step 6  → Admin reviews all submitted documents
Step 7  → (If needed) Admin requests additional documents
Step 8  → Flat owner uploads additional documents
Step 9  → Admin approves (status: Approved)
Step 10 → System updates unit's flat_owner_id → new owner
Step 11 → Both parties receive confirmation notification
Step 12 → New owner can log in and see the unit in their portal
```

---

### 24.5 Flat Listing Approval Process

```
Step 1  → Flat owner creates listing with details and photos (status: Draft)
Step 2  → Submits for review (status: Pending)
Step 3  → Admin notified of pending listing
Step 4  → Admin reviews listing details, images, price, description
Step 5  → Admin approves (status: Published)
Step 6  → Listing appears live on public website
Step 7  → Visitors view listing and submit inquiries
Step 8  → Flat owner and Admin notified of new inquiry
Step 9  → Flat owner responds from portal
Step 10 → When unit is sold/rented, owner marks: Sold/Rented
Step 11 → Listing removed from public website
```

---

## Section 25: Future Improvement Ideas

### 25.1 Payment & Financial Integrations

| Integration | Description |
|------------|-------------|
| 💳 **Online Payment Gateway** | bKash API, Nagad API, SSLCommerz for credit/debit cards |
| 📱 **QR Payment** | Generate payment QR codes per invoice for quick scanning |
| 🏦 **Bank Reconciliation** | Match bank statement imports with payment records |

---

### 25.2 Communication Integrations

| Integration | Description |
|------------|-------------|
| 📲 **SMS Integration** | Local BD SMS gateway (BulkSMS, SMSBD) for rent reminders |
| 💬 **WhatsApp Business API** | Automated messages for invoices, receipts, reminders |
| 📧 **Email Marketing** | Sendgrid / Mailgun for bulk notice sending |
| 🔔 **Push Notifications** | PWA service worker for browser push notifications |

---

### 25.3 Mobile Application

- **React Native** mobile app using this system's API layer
- **Tenant app:** View bills, pay rent, submit complaints, receive notifications
- **Manager app:** Dashboard view, manage tickets and payments on the go

---

### 25.4 Smart Building Features

| Feature | Description |
|---------|-------------|
| ✍️ **Digital Rental Agreement** | eSign using DocuSign or custom digital signature |
| 🪪 **eKYC Verification** | Verify NID electronically via Bangladesh National ID API |
| 🔲 **Visitor QR Pass** | Tenant generates a QR gate pass for expected visitors |

---

### 25.5 AI & Automation

| Feature | Description |
|---------|-------------|
| 🤖 **AI Rent Pricing** | Suggest optimal rent based on market data |
| 🔮 **Predictive Maintenance** | Alert on units with frequent repair history |
| ⚡ **Automated Invoice Dispatch** | Send invoices automatically with no manual trigger |
| 💬 **Chatbot** | Website chat widget for quick FAQs and property inquiries |

---

### 25.6 Platform Enhancements

| Enhancement | Description |
|------------|-------------|
| 🌐 **Multi-language Support** | Bengali + English interface toggle |
| 🌙 **Dark Mode** | Optional dark theme for admin panel |
| 🔧 **Advanced Role Builder** | Custom role creator with granular permission checkboxes |
| 🔌 **Public API Endpoints** | Open property listing API for third-party integrations |
| 📜 **Audit Dashboard** | Visual timeline of all system changes and approvals |

---

*Property Management System PRD v1.0 · 2026*

---

> **Document End** — This PRD covers all 25 sections of the PMS specification.
> Built for enterprise-grade single-organization deployment on Laravel 12 + MySQL.