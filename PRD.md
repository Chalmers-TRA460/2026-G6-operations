# A digital solution for patient education in a surgical setting
## Product Requirements Document

> **TRA460: Digital Health Implementation** | Chalmers University of Technology

> **v1.0 Section Guide:**
> - **[Required]** — Must be substantive for this submission to pass.
> - **[Recommended]** — Optional for v1.0, but strengthens your foundation.
> - **[Expand Later]** — Scaffolding for future iterations. Initial thoughts welcome.

---

### Project Details [Required]

| Field               | Value                                                                                                                               |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **Group**           | TRA460_Group_6                                                                                                                      |
| **Version**         | 1.0                                                                                                                                 |
| **Date**            | 2026-04-17                                                                                                                          |
| **Clinical Mentor** | Donia Kaidi, resident surgery, Sahlgrenska                                                                                          |
| **Group Members**   | Rima (Software Engineering), Jan (Medical student/Sahlgrenska), Hanno (Software Engineering), Xiaoya (Computer Systems and Cybersecurity) |

---

## 1. Needs Statement [Required]

A way to deliver clear, surgery-specific, multilingual education for patients with low health literacy, especially older adults, that improves their ability to understand and follow key instructions before and after surgery.
Patients with low health literacy may be unfamiliar with what to expect before, during, and after surgery. This can make it difficult to remember preparation steps, understand the procedure, follow recovery guidance, and recognize warning signs.
For this project, success means that patients can understand the main steps of their surgical journey, follow key preparation and recovery instructions, and know when to contact healthcare services.

---

### 1.1 Clinical Context & Background [Required]

First-time surgical patients are required to understand information across the full surgical care journey, including how to prepare before surgery, what will happen during the procedure, what to expect during recovery, and which warning signs require medical attention. This can be difficult when information is delivered verbally during time-limited consultations, especially for patients who are stressed, unfamiliar with medical terminology, older, or have low health literacy.
Patients need to understand and act on both preoperative and postoperative instructions, but traditional verbal and written information may not always be enough. Multimedia education may help address this problem: a systematic review found that videos have potential as a supplement to traditional preoperative patient education, although the evidence is still mixed and context-dependent (Tom et al., 2022).
In Sweden, patients can access general healthcare information through services such as 1177. However, general information does not fully address the workflow targeted in this project: helping healthcare professionals quickly generate and share surgery-specific, multilingual, visual education that patients can revisit before and after surgery.

### 1.2 Key Clinical Insights [Required]

Surgical patient education is not only about giving patients information, but about helping them understand what the information means for their own care journey. Patients may receive explanations about preparation, the procedure, recovery, and warning signs, but still struggle to connect this information to their specific surgery and daily life after the operation.
A key clinical insight is that many patients do not fully understand the surgery itself. They may know that they are scheduled for an operation, but remain uncertain about what the surgery is, why it is performed, how it is carried out, and what changes or limitations they should expect afterward. This can make the surgical journey feel unclear and may reduce the patient’s ability to prepare, recover, and seek help appropriately.
This was also reflected in the mentor discussion with surgeon Donia Kaidi, who emphasized that many patients struggle to understand three central parts of surgical care: what the surgery is, how it is performed, and how they should live after surgery. These insights suggest that patient education needs to explain the surgical journey in a more concrete and visual way, rather than relying only on verbal explanations or general written information.
Another important insight is that the same types of questions and uncertainties often recur across patients. This creates a repeated informational burden for nurses and other healthcare professionals. A useful solution should therefore support both sides of the care interaction: patients need simple, surgery-specific information they can revisit, while healthcare professionals need a practical way to generate and share that information without adding significant workload.

### 1.3 Existing Solutions & Gaps [Required]

Existing solutions, including platforms such as 1177, provide relevant patient information but do not fully address the needs of all surgical patients. Information is often presented primarily as text, with limited use of visuals or interactive elements that could improve understanding. Existing solutions may also not provide enough support for patients who need information in languages other than Swedish.

### 1.4 Success Metrics [Recommended]

At this stage, success will be evaluated through early qualitative and prototype-based measures rather than fixed clinical outcome targets. The main goal is to assess whether the solution helps patients better understand their surgical journey and whether healthcare professionals can use it without adding significant workload.
Success for patients means that they can understand and act on the most important information before and after surgery. This can be assessed by whether patients are able to:
describe the key preparation steps before surgery
- explain, in simple terms, what their surgery is and how it is performed
- identify what to expect during recovery
- understand how they should live or adjust daily activities after surgery
- recognize warning signs that require medical attention
- know when to contact healthcare services
Success for healthcare professionals means that the tool is practical to use in a clinical workflow. This can be assessed by whether nurses or other healthcare professionals are able to:
- select the relevant surgery
- configure the surgery type
- generate a tailored patient education page
- preview the result
- share the page with the patient through a link or QR code
Additional success indicators include patient satisfaction with the information, perceived clarity of the visualizations and videos, successful use of the preferred-language function, and reduced need for repeated explanation after the consultation.

---

## 2. Stakeholders & Users

### 2.1 Primary User(s) [Required]

The primary users are patients undergoing surgery, with particular focus on those who face additional barriers to understanding and retaining clinical information. This includes patients with one or more of the following characteristics:

- Low health literacy
- Language barriers
- Cognitive impairment or reduced ability to retain verbal information
- Older age and limited digital confidence

### 2.2 Other Stakeholders [Required]

Other key stakeholders include:

- Healthcare professionals, including surgeons, nurses, nurse assistants, and other physicians involved in surgical care
- Caregivers, family members, elderly care workers, and others who support the patient before or after surgery
- Hospitals and surgical departments responsible for patient education and care delivery
- Public health information platforms such as 1177

### 2.3 User Journey — Current State [Recommended]

![alt text](<Current User Journey.drawio.png>)

### 2.4 User Journey — Our Solution

![alt text](<New User Journey.drawio.png>)
---

## 3. Solution Vision [Required]

The proposed solution is a multilingual patient education platform, delivered through a web-based application or mobile app, that presents surgical information in a clear, structured, and accessible way through text, visuals, and interactive content. Its purpose is to support patient understanding throughout the surgical pathway by making complex information easier to follow before, during, and after surgery.

The platform is intended to:

- Present a clear and structured overview with the timeline of the surgical journey, including the preoperative, intraoperative, and postoperative phases
- Use videos, illustrations, and other visualizations to improve understanding of procedures and recovery
- Provide answers to common patient questions in an accessible format
- Offer practical guidance on preparation, aftercare, and warning signs that require medical attention
- Include a caregiver view for relatives or others supporting the patient
- Support content customization through predefined clinical inputs, such as type of surgery, medication-related information, or expected rehabilitation
- Allow the patient to choose a preferred language before accessing the content

The solution may be developed either as a standalone platform in collaboration with Sahlgrenska University Hospital or as a future extension of existing public health information infrastructure, such as 1177 via Inera.

The overall vision is to make surgical patient education simpler, more visual, and more accessible, regardless of language background, educational level, or prior familiarity with surgical care.

---

## 4. Requirements

### 4.1 Functional Requirements (MoSCoW) [Recommended]

**Must Have** — *Non-negotiable for a functioning MVP*

- **FR1: Language selection at entry** — The platform must allow the patient to choose a preferred language before accessing content.
- **FR2: Access to surgery-specific educational content** — The platform must present information tailored to the relevant surgical pathway using predefined, medically validated templates.
- **FR3: Structured journey-based navigation** — The platform must organize information into clear sections covering: preoperative phase, surgery day / intraoperative explanation, postoperative recovery.
- **FR4: Parameter-based content customization without personal data** — Healthcare staff must be able to select predefined parameters that adapt the generated patient information without requiring personal or sensitive patient data. Examples include: type of surgery, laparoscopic vs open procedure, medications, rehabilitation expected yes/no.
- **FR5: Plain language content** — The platform must present content in clear, simple, non-technical language suitable for users with low health literacy.
- **FR6: Multimedia educational content** — The platform must support educational content delivered through text, images, and videos or anatomical visualizations where clinically useful.
- **FR7: Explanation of preoperative preparation** — The platform must explain key preoperative instructions such as fasting and hygiene, including why these instructions matter.
- **FR8: Explanation of the procedure** — The platform must provide a clear explanation of how the surgery is performed, with focus on visualization, such as images and videos with audio to explain.
- **FR9: Postoperative recovery guidance** — The platform must provide recovery information, including: expected course after surgery, common causes of pain/discomfort, warning signs requiring attention, when and how to seek care.
- **FR10: Web-based access on common devices** — The solution must be accessible through a web interface on common devices such as smartphones, tablets, and computers, without requiring advanced digital skills.

**Should Have** — *High value, but the MVP could technically function without these*

- **FR13: Large-text and accessibility-friendly display mode** — The platform should support readability features such as large text, clear contrast, and simple layout for older users.
- **FR14: Procedure selection interface for healthcare staff** — The platform should provide a simple staff-facing interface where clinicians or nurses can choose the appropriate template and parameters before sharing the information with the patient.
- **FR15: Visual timeline of the care journey** — The platform should display the patient journey as a simple timeline from preparation to recovery.

**Could Have** — *Nice-to-have if time and resources allow*

- **FR16: Audio playback of content** — The platform could offer narrated audio for patients with reading difficulties or low literacy.
- **FR17: Interactive 3D/anatomical models** — The platform could include interactive models to improve understanding of anatomy and surgery.
- **FR18: QR code or direct link sharing** — Healthcare staff could generate a QR code or simple link so patients can open the correct information directly after the consultation.

**Won't Have** — *Explicitly out of scope for this project*

- **FR19: Individualized medical decision support** — The platform will not generate personalized treatment decisions, medication prescriptions, or clinical recommendations beyond predefined validated templates.
- **FR20: Real-time clinician chat or telemedicine** — The MVP will not include live messaging with surgeons, nurses, or other healthcare professionals.
- **FR21: Automated translation without validation** — The MVP will not rely on unvalidated machine translation for medical instructions.
- **FR22: Broad disease management outside the surgical pathway** — The MVP will focus on surgical patient education only, not on general chronic disease management or unrelated care pathways.

### 4.2 Non-Functional Requirements & Constraints [Recommended]

**NFR1. Accessibility and Usability**
- The platform must be usable by patients with low digital confidence and low health literacy.
- The platform must not require prior training or technical support for basic use.
- The interface must use: simple and consistent navigation, plain non-technical language where possible, readable font sizes, high visual contrast.
- Essential content must remain understandable for users who are unfamiliar with medical terminology.

**NFR2. Performance**
- Core informational pages must load within 3 seconds under standard mobile network conditions.
- Text-based content and critical patient instructions must load before heavier media such as videos or interactive models.

**NFR3. Availability and Reliability**
- The platform should be available during expected patient usage hours, especially before and after consultations.
- The platform should achieve at least 99% availability during normal operating periods, excluding planned maintenance.

**NFR4. Security and Privacy**
- The platform must follow data minimization principles.
- The platform must not require any collection, processing, or storage of personally identifiable information or sensitive patient data for its core functionality.
- All communication between the user's device and the platform must be encrypted using HTTPS/TLS.

**NFR5. Compatibility and Responsiveness**
- The platform must function on modern smartphones, tablets, and desktop computers.
- The platform must be accessible through a standard web browser.
- The interface must be responsive across common screen sizes.

**NFR6. Maintainability**
- Medical content, translations, FAQs, and visual materials must be updateable without major redevelopment of the platform.
- The system should support structured content updates when clinical guidance changes.
- Changes to approved templates and patient-facing content should be traceable through version control or equivalent revision management.

### 4.3 Constraints

**C1. Regulatory Constraint**
- The solution must be designed in accordance with GDPR principles.
- The solution must align with applicable healthcare regulations, institutional policies, and clinical governance requirements for patient education tools.

**C2. Clinical Content Validation Constraint**
- All medical content must be clinically reviewed and approved before initial deployment.
- All visualizations must be clinically reviewed and approved before initial deployment.
- All translated materials must be clinically reviewed and approved before initial deployment.
- The same review and approval process must be completed before any later content update is published.

**C3. Scope Constraint**
- The MVP is limited to standardized patient education based on: predefined templates, medically validated content, non-identifying clinical parameters.
- The platform will not provide: individualized diagnosis, treatment decisions, personalized medication recommendations.

---

## 5. Technical Direction [Expand Later]

- **Platform:** [iOS / Android / Web / Cross-platform / TBD]
- **Key Integrations:** [EHR systems, wearables, sensors, APIs, etc.]
- **Candidate Tech Stack:** [SpeziVibe, Swift/Kotlin, React, etc. / TBD]
- **Infrastructure:** [Cloud provider, on-premise, hybrid / TBD]

---

## 6. Open Questions & Risks [Required]

- **[Question/Risk]: How much detail should surgical explanations include without overwhelming patients?**
  There is a risk that providing too much detail may reduce comprehension, while too little detail may leave patients unprepared.
  *Plan to resolve:* Validate content level with clinical mentor (Donia) and compare against current patient communication practices.
  *Timeline:* Initial clarification after completing first prototype next week.

- **[Question/Risk]: Will healthcare professionals adopt and use the platform in practice?**
  The tool may not fit into existing workflows or might add too much perceived extra work.
  *Plan to resolve:* Make using the tool as simple and quick as possible and stay open for integration possibilities with already existing workflows.
  *Timeline:* Usability considerations during design phase and results from on-site tests with nurses/surgeons.

- **[Question/Risk]: How do we ensure accessibility for low digital literacy users?**
  There is a risk that the solution remains difficult to use for the very groups it aims to support.
  *Plan to resolve:* Apply simple UI principles and test early prototypes with non-technical users.
  *Timeline:* Ongoing throughout design phase, initial validation in prototype.

---

## Changelog [Required]

| Version | Date       | Summary of Changes                                |
|---------|------------|---------------------------------------------------|
| 1.0     | 2026-04-17 | Initial draft after first clinical mentor meeting |
|---------|------------|---------------------------------------------------|
| 1.1    | 2026-05-05 | After receiving feedback, updated Section to be more specific |
