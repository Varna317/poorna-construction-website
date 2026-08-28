import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, PhoneCall, MessageCircle, Mail, AlertCircle, RefreshCw } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const prefillService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: prefillService || '',
    projectLocation: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefillService }));
    }
  }, [prefillService]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 8-10 digits).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a required service category.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();

    formDataToSend.append("access_key", "4ef044d8-666f-4e34-95bf-41051607d7c8");
    formDataToSend.append("subject", "New Project Enquiry - Poorna Builders");
    formDataToSend.append("from_name", formData.fullName);

    formDataToSend.append("Full Name", formData.fullName);
    formDataToSend.append("Phone", formData.phone);
    formDataToSend.append("Email", formData.email || "Not provided");
    formDataToSend.append("Service Required", formData.serviceRequired);
    formDataToSend.append(
      "Project Location",
      formData.projectLocation || "Not provided"
    );
    formDataToSend.append("Project Details", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitting(false);
      setIsSubmitted(true);
    } else {
      throw new Error(result.message || "Form submission failed");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setIsSubmitting(false);

    alert(
      "Sorry, we could not send your enquiry. Please try again or contact us directly."
    );
  }
};

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceRequired: '',
      projectLocation: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const whatsappInquiryUrl = `https://wa.me/91${companyData.whatsapp.phone}?text=${encodeURIComponent(
    `Hello Poorna Associates,\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nService: ${formData.serviceRequired}\nLocation: ${formData.projectLocation || 'N/A'}\nMessage: ${formData.message}`
  )}`;

  return (
    <div className="poorna-card p-4 p-md-5 bg-white shadow-sm border" id="quote">
      {isSubmitted ? (
        <div className="text-center py-4">
          <div className="mx-auto mb-3 p-3 rounded-circle bg-success-subtle text-success d-inline-flex">
            <CheckCircle2 size={48} />
          </div>
          <h3 className="h4 fw-bold text-primary mb-2">
            Enquiry Prepared Successfully
          </h3>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '520px' }}>
            Thank you, <strong>{formData.fullName}</strong>. To ensure the fastest response for your <strong>{formData.serviceRequired}</strong> project, you can connect directly with our engineering team right now:
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-inline-flex align-items-center justify-content-center gap-2 py-2 px-4 fw-semibold"
              style={{ backgroundColor: '#25d366', borderColor: '#25d366' }}
            >
              <MessageCircle size={18} />
              <span>Forward via WhatsApp</span>
            </a>

            <a
              href={`tel:${companyData.phones[0].raw}`}
              className="btn btn-poorna-primary py-2 px-4"
            >
              <PhoneCall size={18} />
              <span>Call Team Now</span>
            </a>
          </div>

          <div className="pt-3 border-top border-light-subtle">
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-sm btn-link text-muted d-inline-flex align-items-center gap-1 text-decoration-none"
            >
              <RefreshCw size={14} />
              <span>Submit Another Enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <h3 className="h4 fw-bold text-primary mb-1">
              Request a Project Quote
            </h3>
            <p className="small text-muted mb-0">
              Fill in your project requirements and our engineering team will evaluate your scope.
            </p>
          </div>

          <div className="row g-3">
            {/* Full Name */}
            <div className="col-md-6">
              <label htmlFor="fullName" className="form-label small fw-semibold text-dark">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                id="fullName"
                name="fullName"
                placeholder="e.g. R. Sundaram"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={14} />
                  <span>{errors.fullName}</span>
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label small fw-semibold text-dark">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone"
                name="phone"
                placeholder="e.g. 99524 65692"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={14} />
                  <span>{errors.phone}</span>
                </div>
              )}
            </div>

            {/* Email Address */}
            <div className="col-md-6">
              <label htmlFor="email" className="form-label small fw-semibold text-dark">
                Email Address <span className="text-muted fw-normal">(Optional)</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                placeholder="e.g. name@domain.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={14} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Service Required */}
            <div className="col-md-6">
              <label htmlFor="serviceRequired" className="form-label small fw-semibold text-dark">
                Service Required <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.serviceRequired ? 'is-invalid' : ''}`}
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Required Service --</option>
                <option value="Construction & Civil Works">Construction & Civil Works</option>
                <option value="Solar Energy Solutions">Solar Energy Solutions</option>
                <option value="Solar-Ready Construction">Solar-Ready Construction</option>
                <option value="Project Management & Consulting">Project Management & Consulting</option>
                <option value="Renovation & Retrofitting">Renovation & Retrofitting</option>
                <option value="Site Development & Landscaping">Site Development & Landscaping</option>
                <option value="Other">Other Civil / Solar Enquiry</option>
              </select>
              {errors.serviceRequired && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={14} />
                  <span>{errors.serviceRequired}</span>
                </div>
              )}
            </div>

            {/* Project Location */}
            <div className="col-12">
              <label htmlFor="projectLocation" className="form-label small fw-semibold text-dark">
                Project Location / City <span className="text-muted fw-normal">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="projectLocation"
                name="projectLocation"
                placeholder="e.g. Tiruchengode / Namakkal / Salem / Harur"
                value={formData.projectLocation}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="col-12">
              <label htmlFor="message" className="form-label small fw-semibold text-dark">
                Project Details / Message <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                placeholder="Please describe your plot size, building requirements, or solar capacity needed..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback d-flex align-items-center gap-1">
                  <AlertCircle size={14} />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn btn-poorna-red w-100 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Processing Enquiry...</span>
                ) : (
                  <>
                    <span>Request a Quote</span>
                    <Send size={16} />
                  </>
                )}
              </button>
              <div className="d-flex justify-content-center align-items-center gap-2 mt-2 text-muted small">
                <span>Immediate Assistance:</span>
                <a href={`tel:${companyData.phones[0].raw}`} className="text-danger fw-bold text-decoration-none">
                  {companyData.phones[0].display}
                </a>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
