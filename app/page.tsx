"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Globe, BookOpen, Users, Award, Phone, Mail, Menu, X, CheckCircle, Send, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const translations = {
  en: {
    // Header
    home: "Home",
    courses: "Courses",
    about: "About",
    contact: "Contact",
    getStarted: "Get Started",

    // Hero Section
    heroTitle: "Master Pharmaceutical Sales & English Skills",
    heroSubtitle:
      "Advance your career with our comprehensive training programs designed for pharmaceutical professionals",
    startLearning: "Start Learning Today",
    watchDemo: "Watch Demo",
    slogan: "From Graduation to Career Elevation!",

    // Features
    featuresTitle: "Why Choose Our Platform?",
    featuresSubtitle: "Comprehensive training designed specifically for pharmaceutical sales professionals",

    feature1Title: "Pharmaceutical Sales Mastery",
    feature1Desc:
      "Learn advanced sales techniques, product knowledge, and client relationship management specific to the pharmaceutical industry.",

    feature2Title: "Professional English Skills",
    feature2Desc:
      "Improve your business English communication, presentation skills, and medical terminology for international markets.",

    feature3Title: "Interactive Learning",
    feature3Desc:
      "Engage with real-world scenarios, case studies, and interactive simulations to practice your skills.",

    feature4Title: "Expert Instructors",
    feature4Desc:
      "Learn from industry veterans with years of experience in pharmaceutical sales and business development.",

    feature5Title: "Flexible Schedule",
    feature5Desc: "Study at your own pace with 24/7 access to course materials and mobile-friendly platform.",

    // Courses
    coursesTitle: "Our Training Programs",
    coursesSubtitle: "Specialized courses designed to elevate your pharmaceutical sales career",

    course1Title: "Pharmaceutical Sales Fundamentals",
    course1Desc:
      "Master the basics of pharmaceutical sales, including product positioning, objection handling, and territory management.",
    course1Duration: "3 weeks",
    course1Level: "Beginner",

    course2Title: "Advanced Sales Techniques",
    course2Desc:
      "Advanced strategies for complex sales cycles, key account management, and building long-term relationships.",
    course2Duration: "3 weeks",
    course2Level: "Advanced",

    course3Title: "Business English for Pharma",
    course3Desc:
      "Specialized English training focusing on pharmaceutical terminology, presentations, and international communication.",
    course3Duration: "3 weeks",
    course3Level: "Intermediate",

    course4Title: "Digital Sales & Marketing",
    course4Desc: "Modern digital tools and strategies for pharmaceutical sales in the digital age.",
    course4Duration: "3 weeks",
    course4Level: "Intermediate",

    course5Title: "English Circle Academy",
    course5Desc:
      "Comprehensive English language program designed to enhance communication skills for pharmaceutical professionals in global markets.",
    course5Duration: "3 weeks",
    course5Level: "All Levels",

    enrollNow: "Enroll Now",
    learnMore: "Learn More",

    // Enrollment Form
    enrollmentTitle: "Course Enrollment",
    enrollmentSubtitle: "Complete your enrollment to start your pharmaceutical sales journey",
    studyingObjectives: "Studying Objectives",
    studyingObjectivesPlaceholder:
      "Please describe your learning goals and what you hope to achieve from this course...",
    submitEnrollment: "Submit Enrollment",
    submittingEnrollment: "Submitting...",
    enrollmentSuccess: "Enrollment submitted successfully! We'll contact you soon.",
    enrollmentError: "Failed to submit enrollment. Please try again.",
    objectivesRequired: "Please describe your studying objectives",
    backToCourses: "Back to Courses",
    selectedCourse: "Selected Course",

    // Vision Section
    visionTitle: "Our Vision",
    visionContent:
      "To become the leading platform for preparing pharmacy graduates for the medical sales industry empowering a new generation of professional medical representatives.",

    missionTitle: "Our Mission",
    missionContent:
      "To provide specialized, hands-on training programs that equip pharmacy graduates with the essential skills, confidence, and industry knowledge required to succeed in medical sales, through applied learning, market simulations, and personalized career support.",

    // Contact
    contactTitle: "Get In Touch",
    contactSubtitle: "Ready to advance your pharmaceutical sales career? Contact us today!",

    nameLabel: "Full Name",
    emailLabel: "Email Address",
    messageLabel: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Failed to send message. Please try again.",
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    messageRequired: "Message is required",

    // Footer
    footerDesc:
      "From Graduation to Career Elevation! Empowering pharmaceutical sales professionals with world-class training and English language skills.",
    quickLinks: "Quick Links",
    programs: "Programs",
    support: "Support",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",

    signIn: "Sign In",
    signUp: "Sign Up",
    signInTitle: "Welcome Back",
    signUpTitle: "Create Your Account",
    signInSubtitle: "Sign in to access your courses and track your progress",
    signUpSubtitle: "Join RxCareerAcademy and start your pharmaceutical sales journey",
    password: "Password",
    confirmPassword: "Confirm Password",
    position: "Position",
    phoneNumber: "Phone Number",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    forgotPassword: "Forgot Password?",
    createAccount: "Create Account",
    signInButton: "Sign In",
    or: "or",
    close: "Close",
  },
  ar: {
    // Header
    home: "الرئيسية",
    courses: "الدورات",
    about: "حولنا",
    contact: "اتصل بنا",
    getStarted: "ابدأ الآن",

    // Hero Section
    heroTitle: "إتقان مبيعات الأدوية ومهارات اللغة الإنجليزية",
    heroSubtitle: "طور مسيرتك المهنية مع برامجنا التدريبية الشاملة المصممة للمهنيين في مجال الأدوية",
    startLearning: "ابدأ التعلم اليوم",
    watchDemo: "شاهد العرض التوضيحي",
    slogan: "من التخرج إلى الارتقاء المهني!",

    // Features
    featuresTitle: "لماذا تختار منصتنا؟",
    featuresSubtitle: "تدريب شامل مصمم خصيصاً لمهنيي مبيعات الأدوية",

    feature1Title: "إتقان مبيعات الأدوية",
    feature1Desc: "تعلم تقنيات المبيعات المتقدمة ومعرفة المنتجات وإدارة علاقات العملاء الخاصة بصناعة الأدوية.",

    feature2Title: "مهارات اللغة الإنجليزية المهنية",
    feature2Desc: "حسن مهارات التواصل باللغة الإنجليزية التجارية ومهارات العرض والمصطلحات الطبية للأسواق الدولية.",

    feature3Title: "التعلم التفاعلي",
    feature3Desc: "تفاعل مع سيناريوهات من الواقع ودراسات الحالة والمحاكاة التفاعلية لممارسة مهاراتك.",

    feature4Title: "مدربون خبراء",
    feature4Desc: "تعلم من خبراء الصناعة الذين لديهم سنوات من الخبرة في مبيعات الأدوية وتطوير الأعمال.",

    feature5Title: "جدول مرن",
    feature5Desc:
      "ادرس بالسرعة التي تناسبك مع إمكانية الوصول على مدار الساعة لمواد الدورة والمنصة المتوافقة مع الهاتف المحمول.",

    // Courses
    coursesTitle: "برامجنا التدريبية",
    coursesSubtitle: "دورات متخصصة مصممة لرفع مستوى مسيرتك في مبيعات الأدوية",

    course1Title: "أساسيات مبيعات الأدوية",
    course1Desc: "إتقان أساسيات مبيعات الأدوية، بما في ذلك تموضع المنتج والتعامل مع الاعتراضات وإدارة المنطقة.",
    course1Duration: "3 أسابيع",
    course1Level: "مبتدئ",

    course2Title: "تقنيات المبيعات المتقدمة",
    course2Desc: "استراتيجيات متقدمة لدورات المبيعات المعقدة وإدارة الحسابات الرئيسية وبناء علاقات طويلة الأمد.",
    course2Duration: "3 أسابيع",
    course2Level: "متقدم",

    course3Title: "الإنجليزية التجارية للأدوية",
    course3Desc: "تدريب متخصص في اللغة الإنجليزية يركز على المصطلحات الصيدلانية والعروض التقديمية والتواصل الدولي.",
    course3Duration: "3 أسابيع",
    course3Level: "متوسط",

    course4Title: "المبيعات والتسويق الرقمي",
    course4Desc: "الأدوات والاستراتيجيات الرقمية الحديثة لمبيعات الأدوية في العصر الرقمي.",
    course4Duration: "3 أسابيع",
    course4Level: "متوسط",

    course5Title: "أكاديمية الدائرة الإنجليزية",
    course5Desc: "برنامج شامل للغة الإنجليزية مصمم لتعزيز مهارات التواصل للمهنيين في مجال الأدوية في الأسواق العالمية.",
    course5Duration: "3 أسابيع",
    course5Level: "جميع المستويات",

    enrollNow: "سجل الآن",
    learnMore: "اعرف المزيد",

    // Enrollment Form
    enrollmentTitle: "تسجيل الدورة",
    enrollmentSubtitle: "أكمل تسجيلك لبدء رحلتك في مبيعات الأدوية",
    studyingObjectives: "أهداف الدراسة",
    studyingObjectivesPlaceholder: "يرجى وصف أهدافك التعليمية وما تأمل في تحقيقه من هذه الدورة...",
    submitEnrollment: "إرسال التسجيل",
    submittingEnrollment: "جاري الإرسال...",
    enrollmentSuccess: "تم إرسال التسجيل بنجاح! سنتواصل معك قريباً.",
    enrollmentError: "فشل في إرسال التسجيل. يرجى المحاولة مرة أخرى.",
    objectivesRequired: "يرجى وصف أهدافك الدراسية",
    backToCourses: "العودة إلى الدورات",
    selectedCourse: "الدورة المختارة",

    // Vision Section
    visionTitle: "رؤيتنا",
    visionContent:
      "أن نصبح المنصة الرائدة لإعداد خريجي الصيدلة لصناعة المبيعات الطبية وتمكين جيل جديد من ممثلي المبيعات الطبية المحترفين.",

    missionTitle: "مهمتنا",
    missionContent:
      "تقديم برامج تدريبية متخصصة وعملية تزود خريجي الصيدلة بالمهارات الأساسية والثقة والمعرفة الصناعية المطلوبة للنجاح في المبيعات الطبية، من خلال التعلم التطبيقي ومحاكاة السوق والدعم المهني الشخصي.",

    // Contact
    contactTitle: "تواصل معنا",
    contactSubtitle: "مستعد لتطوير مسيرتك في مبيعات الأدوية؟ اتصل بنا اليوم!",

    nameLabel: "الاسم الكامل",
    emailLabel: "عنوان البريد الإلكتروني",
    messageLabel: "الرسالة",
    sendMessage: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة بنجاح!",
    messageError: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    nameRequired: "الاسم مطلوب",
    emailRequired: "البريد الإلكتروني مطلوب",
    emailInvalid: "يرجى إدخال عنوان بريد إلكتروني صحيح",
    messageRequired: "الرسالة مطلوبة",

    // Footer
    footerDesc:
      "من التخرج إلى الارتقاء المهني! تمكين مهنيي مبيعات الأدوية بالتدريب عالمي المستوى ومهارات اللغة الإنجليزية.",
    quickLinks: "روابط سريعة",
    programs: "البرامج",
    support: "الدعم",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة.",

    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    signInTitle: "مرحباً بعودتك",
    signUpTitle: "إنشاء حسابك",
    signInSubtitle: "سجل دخولك للوصول إلى دوراتك وتتبع تقدمك",
    signUpSubtitle: "انضم إلى أكاديمية RxCareer وابدأ رحلتك في مبيعات الأدوية",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    position: "المنصب",
    phoneNumber: "رقم الهاتف",
    alreadyHaveAccount: "لديك حساب بالفعل؟",
    dontHaveAccount: "ليس لديك حساب؟",
    forgotPassword: "نسيت كلمة المرور؟",
    createAccount: "إنشاء حساب",
    signInButton: "تسجيل الدخول",
    or: "أو",
    close: "إغلاق",
  },
}

// Course data for enrollment
const courses = [
  {
    id: "course1",
    titleKey: "course1Title",
    descKey: "course1Desc",
    duration: "3 weeks",
    level: "Beginner",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sales%20Fundamental-Yyh24QL8Au7EFsfHe4KCJ3kzft03Qf.png",
  },
  {
    id: "course2",
    titleKey: "course2Title",
    descKey: "course2Desc",
    duration: "3 weeks",
    level: "Advanced",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Advanced%20sales%20technique.jpg-HJNU7DdxNP3iBURH2gdhHGk3MUPwP4.png",
  },
  {
    id: "course3",
    titleKey: "course3Title",
    descKey: "course3Desc",
    duration: "3 weeks",
    level: "Intermediate",
    image: "/images/business-english-pharma-updated.png",
  },
  {
    id: "course4",
    titleKey: "course4Title",
    descKey: "course4Desc",
    duration: "3 weeks",
    level: "Intermediate",
    image: "/images/digital-sales-marketing-new.png",
  },
  {
    id: "course5",
    titleKey: "course5Title",
    descKey: "course5Desc",
    duration: "3 weeks",
    level: "All Levels",
    image: "/images/english-circle-academy.png",
  },
]

export default function Component() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showEnrollment, setShowEnrollment] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})

  // Enrollment form state
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    position: "",
    studyingObjectives: "",
  })
  const [isSubmittingEnrollment, setIsSubmittingEnrollment] = useState(false)
  const [enrollmentSubmitStatus, setEnrollmentSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [enrollmentFormErrors, setEnrollmentFormErrors] = useState<{ [key: string]: string }>({})

  const t = translations[language]
  const isRTL = language === "ar"

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Contact form validation
  const validateContactForm = () => {
    const errors: { [key: string]: string } = {}

    if (!contactForm.name.trim()) {
      errors.name = t.nameRequired
    }

    if (!contactForm.email.trim()) {
      errors.email = t.emailRequired
    } else if (!isValidEmail(contactForm.email)) {
      errors.email = t.emailInvalid
    }

    if (!contactForm.message.trim()) {
      errors.message = t.messageRequired
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Enrollment form validation
  const validateEnrollmentForm = () => {
    const errors: { [key: string]: string } = {}

    if (!enrollmentForm.name.trim()) {
      errors.name = t.nameRequired
    }

    if (!enrollmentForm.email.trim()) {
      errors.email = t.emailRequired
    } else if (!isValidEmail(enrollmentForm.email)) {
      errors.email = t.emailInvalid
    }

    if (!enrollmentForm.phoneNumber.trim()) {
      errors.phoneNumber = language === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
    }

    if (!enrollmentForm.position.trim()) {
      errors.position = language === "en" ? "Position is required" : "المنصب مطلوب"
    }

    if (!enrollmentForm.studyingObjectives.trim()) {
      errors.studyingObjectives = t.objectivesRequired
    }

    setEnrollmentFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateContactForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          to: "info@rxcareeracademy.com",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setContactForm({ name: "", email: "", message: "" })
        setFormErrors({})
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle enrollment form submission
  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEnrollmentForm()) {
      return
    }

    setIsSubmittingEnrollment(true)
    setEnrollmentSubmitStatus("idle")

    try {
      const selectedCourseData = courses.find((course) => course.id === selectedCourse)
      const courseName = selectedCourseData ? t[selectedCourseData.titleKey as keyof typeof t] : "Unknown Course"

      const response = await fetch("/api/send-enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...enrollmentForm,
          courseName,
          courseId: selectedCourse,
          to: "info@rxcareeracademy.com",
        }),
      })

      if (response.ok) {
        setEnrollmentSubmitStatus("success")
        setEnrollmentForm({ name: "", email: "", phoneNumber: "", position: "", studyingObjectives: "" })
        setEnrollmentFormErrors({})
      } else {
        setEnrollmentSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending enrollment:", error)
      setEnrollmentSubmitStatus("error")
    } finally {
      setIsSubmittingEnrollment(false)
    }
  }

  // Handle input changes for contact form
  const handleContactInputChange = (field: string, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Handle input changes for enrollment form
  const handleEnrollmentInputChange = (field: string, value: string) => {
    setEnrollmentForm((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (enrollmentFormErrors[field]) {
      setEnrollmentFormErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Handle enrollment button click
  const handleEnrollClick = (courseId: string) => {
    setSelectedCourse(courseId)
    setShowEnrollment(true)
  }

  // Close enrollment modal
  const closeEnrollmentModal = () => {
    setShowEnrollment(false)
    setSelectedCourse(null)
    setEnrollmentForm({ name: "", email: "", phoneNumber: "", position: "", studyingObjectives: "" })
    setEnrollmentFormErrors({})
    setEnrollmentSubmitStatus("idle")
  }

  return (
    <div className={`min-h-screen ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RxCareerAcademy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              {t.courses}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              {t.about}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t.contact}
            </Link>
          </nav>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>

            <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
              <Button variant="outline" onClick={() => setShowSignIn(true)}>
                {t.signIn}
              </Button>
              <Button onClick={() => setShowSignUp(true)}>{t.signUp}</Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                {t.home}
              </Link>
              <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
                {t.courses}
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                {t.about}
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                {t.contact}
              </Link>
              <div className="flex flex-col space-y-2">
                <Button variant="outline" onClick={() => setShowSignIn(true)} className="w-full">
                  {t.signIn}
                </Button>
                <Button onClick={() => setShowSignUp(true)} className="w-full">
                  {t.signUp}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Award className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                {language === "en" ? "Professional Training" : "تدريب مهني"}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">RxCareerAcademy</h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">E-Learning Platform</h2>
              <div className="text-xl lg:text-2xl font-medium text-muted-foreground mb-4">{t.slogan}</div>
              <p className="text-lg text-muted-foreground max-w-2xl">{t.heroSubtitle}</p>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Master%20Pharmacutical%20sales.jpg-SLUBa3eClVyKrY0Q2CDFLh7bBNVyXs.jpeg"
                alt="Mastering Pharmaceutical Sales and English Skills"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t.featuresTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.featuresSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t.feature1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.feature1Desc}</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t.feature2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.feature2Desc}</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t.feature3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.feature3Desc}</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t.feature4Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.feature4Desc}</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t.feature5Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.feature5Desc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t.coursesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.coursesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={t[course.titleKey as keyof typeof t] as string}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">
                      {language === "en"
                        ? course.level
                        : course.level === "Beginner"
                          ? "مبتدئ"
                          : course.level === "Advanced"
                            ? "متقدم"
                            : course.level === "Intermediate"
                              ? "متوسط"
                              : "جميع المستويات"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {language === "en" ? course.duration : "3 أسابيع"}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{t[course.titleKey as keyof typeof t]}</CardTitle>
                  <CardDescription>{t[course.descKey as keyof typeof t]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => handleEnrollClick(course.id)}>
                    <GraduationCap className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t.enrollNow}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.visionTitle}</h2>
                <p className="text-lg text-muted-foreground">{t.visionContent}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t.missionTitle}</h3>
                <p className="text-lg text-muted-foreground">{t.missionContent}</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/vision-mission.png"
                alt="RxCareerAcademy Vision & Mission"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.contactSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground">+966 56 797 9579</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">info@rxcareeracademy.com</div>
                </div>
              </div>
              <div className="relative mt-8">
                <Image
                  src="/images/get-in-touch.png"
                  alt="Get in Touch - Contact RxCareerAcademy"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.nameLabel}</label>
                    <Input
                      placeholder={t.nameLabel}
                      value={contactForm.name}
                      onChange={(e) => handleContactInputChange("name", e.target.value)}
                      className={formErrors.name ? "border-red-500" : ""}
                    />
                    {formErrors.name && <p className="text-sm text-red-500">{formErrors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.emailLabel}</label>
                    <Input
                      type="email"
                      placeholder={t.emailLabel}
                      value={contactForm.email}
                      onChange={(e) => handleContactInputChange("email", e.target.value)}
                      className={formErrors.email ? "border-red-500" : ""}
                    />
                    {formErrors.email && <p className="text-sm text-red-500">{formErrors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.messageLabel}</label>
                    <textarea
                      className={`w-full min-h-[120px] px-3 py-2 border bg-background rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${formErrors.message ? "border-red-500" : "border-input"}`}
                      placeholder={t.messageLabel}
                      value={contactForm.message}
                      onChange={(e) => handleContactInputChange("message", e.target.value)}
                    />
                    {formErrors.message && <p className="text-sm text-red-500">{formErrors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                        {t.sendMessage}
                      </>
                    )}
                  </Button>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <p className="text-sm text-green-800">{t.messageSent}</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-600 mr-2" />
                        <p className="text-sm text-red-800">{t.messageError}</p>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">RxCareerAcademy</span>
              </div>
              <p className="text-muted-foreground">{t.footerDesc}</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">{t.quickLinks}</h4>
              <div className="space-y-2">
                <Link href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t.home}
                </Link>
                <Link href="#courses" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t.courses}
                </Link>
                <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t.about}
                </Link>
                <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t.contact}
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">{t.programs}</h4>
              <div className="space-y-2">
                <div className="text-muted-foreground">{t.course1Title}</div>
                <div className="text-muted-foreground">{t.course2Title}</div>
                <div className="text-muted-foreground">{t.course3Title}</div>
                <div className="text-muted-foreground">{t.course4Title}</div>
                <div className="text-muted-foreground">{t.course5Title}</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">{t.followUs}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Button variant="outline" size="icon">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RxCareerAcademy. {t.allRightsReserved}</p>
          </div>
        </div>
      </footer>

      {/* Enrollment Modal */}
      {showEnrollment && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{t.enrollmentTitle}</h2>
                <Button variant="ghost" size="sm" onClick={closeEnrollmentModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">{t.enrollmentSubtitle}</p>

              {/* Selected Course Info */}
              {(() => {
                const courseData = courses.find((course) => course.id === selectedCourse)
                if (!courseData) return null
                return (
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">{t.selectedCourse}</h3>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                        <Image
                          src={courseData.image || "/placeholder.svg"}
                          alt={t[courseData.titleKey as keyof typeof t] as string}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{t[courseData.titleKey as keyof typeof t]}</h4>
                        <p className="text-sm text-muted-foreground">
                          {language === "en"
                            ? courseData.level
                            : courseData.level === "Beginner"
                              ? "مبتدئ"
                              : courseData.level === "Advanced"
                                ? "متقدم"
                                : courseData.level === "Intermediate"
                                  ? "متوسط"
                                  : "جميع المستويات"}{" "}
                          • {language === "en" ? courseData.duration : "3 أسابيع"}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })()}

              <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.nameLabel}</label>
                    <Input
                      placeholder={t.nameLabel}
                      value={enrollmentForm.name}
                      onChange={(e) => handleEnrollmentInputChange("name", e.target.value)}
                      className={enrollmentFormErrors.name ? "border-red-500" : ""}
                    />
                    {enrollmentFormErrors.name && <p className="text-sm text-red-500">{enrollmentFormErrors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.emailLabel}</label>
                    <Input
                      type="email"
                      placeholder={t.emailLabel}
                      value={enrollmentForm.email}
                      onChange={(e) => handleEnrollmentInputChange("email", e.target.value)}
                      className={enrollmentFormErrors.email ? "border-red-500" : ""}
                    />
                    {enrollmentFormErrors.email && <p className="text-sm text-red-500">{enrollmentFormErrors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.phoneNumber}</label>
                    <Input
                      type="tel"
                      placeholder={t.phoneNumber}
                      value={enrollmentForm.phoneNumber}
                      onChange={(e) => handleEnrollmentInputChange("phoneNumber", e.target.value)}
                      className={enrollmentFormErrors.phoneNumber ? "border-red-500" : ""}
                    />
                    {enrollmentFormErrors.phoneNumber && (
                      <p className="text-sm text-red-500">{enrollmentFormErrors.phoneNumber}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.position}</label>
                    <select
                      className={`w-full px-3 py-2 border bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${enrollmentFormErrors.position ? "border-red-500" : "border-input"}`}
                      value={enrollmentForm.position}
                      onChange={(e) => handleEnrollmentInputChange("position", e.target.value)}
                    >
                      <option value="">{language === "en" ? "Select your position" : "اختر منصبك"}</option>
                      <option value="pharmacy-graduate">
                        {language === "en" ? "Pharmacy Graduate" : "خريج صيدلة"}
                      </option>
                      <option value="medical-rep">{language === "en" ? "Medical Representative" : "مندوب طبي"}</option>
                      <option value="sales-manager">{language === "en" ? "Sales Manager" : "مدير مبيعات"}</option>
                      <option value="pharmacist">{language === "en" ? "Pharmacist" : "صيدلي"}</option>
                      <option value="student">{language === "en" ? "Student" : "طالب"}</option>
                      <option value="other">{language === "en" ? "Other" : "أخرى"}</option>
                    </select>
                    {enrollmentFormErrors.position && (
                      <p className="text-sm text-red-500">{enrollmentFormErrors.position}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.studyingObjectives}</label>
                  <textarea
                    className={`w-full min-h-[120px] px-3 py-2 border bg-background rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${enrollmentFormErrors.studyingObjectives ? "border-red-500" : "border-input"}`}
                    placeholder={t.studyingObjectivesPlaceholder}
                    value={enrollmentForm.studyingObjectives}
                    onChange={(e) => handleEnrollmentInputChange("studyingObjectives", e.target.value)}
                  />
                  {enrollmentFormErrors.studyingObjectives && (
                    <p className="text-sm text-red-500">{enrollmentFormErrors.studyingObjectives}</p>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={closeEnrollmentModal}
                    className="flex-1 bg-transparent"
                  >
                    {t.backToCourses}
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isSubmittingEnrollment}>
                    {isSubmittingEnrollment ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t.submittingEnrollment}
                      </>
                    ) : (
                      <>
                        <GraduationCap className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                        {t.submitEnrollment}
                      </>
                    )}
                  </Button>
                </div>

                {/* Success/Error Messages */}
                {enrollmentSubmitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <p className="text-sm text-green-800">{t.enrollmentSuccess}</p>
                    </div>
                  </div>
                )}

                {enrollmentSubmitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex items-center">
                      <X className="h-5 w-5 text-red-600 mr-2" />
                      <p className="text-sm text-red-800">{t.enrollmentError}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{t.signInTitle}</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowSignIn(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">{t.signInSubtitle}</p>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.emailLabel}</label>
                  <Input type="email" placeholder={t.emailLabel} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.password}</label>
                  <Input type="password" placeholder={t.password} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <input type="checkbox" id="remember" className="rounded" />
                    <label htmlFor="remember" className="text-sm">
                      {language === "en" ? "Remember me" : "تذكرني"}
                    </label>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-sm">
                    {t.forgotPassword}
                  </Button>
                </div>
                <Button className="w-full">{t.signInButton}</Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {t.dontHaveAccount}{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => {
                      setShowSignIn(false)
                      setShowSignUp(true)
                    }}
                  >
                    {t.signUp}
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{t.signUpTitle}</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowSignUp(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">{t.signUpSubtitle}</p>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.nameLabel}</label>
                  <Input placeholder={t.nameLabel} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.emailLabel}</label>
                  <Input type="email" placeholder={t.emailLabel} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.phoneNumber}</label>
                  <Input type="tel" placeholder={t.phoneNumber} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.position}</label>
                  <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <option value="">{language === "en" ? "Select your position" : "اختر منصبك"}</option>
                    <option value="pharmacy-graduate">{language === "en" ? "Pharmacy Graduate" : "خريج صيدلة"}</option>
                    <option value="medical-rep">{language === "en" ? "Medical Representative" : "مندوب طبي"}</option>
                    <option value="sales-manager">{language === "en" ? "Sales Manager" : "مدير مبيعات"}</option>
                    <option value="pharmacist">{language === "en" ? "Pharmacist" : "صيدلي"}</option>
                    <option value="student">{language === "en" ? "Student" : "طالب"}</option>
                    <option value="other">{language === "en" ? "Other" : "أخرى"}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.password}</label>
                  <Input type="password" placeholder={t.password} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.confirmPassword}</label>
                  <Input type="password" placeholder={t.confirmPassword} />
                </div>
                <div className="flex items-start space-x-2 rtl:space-x-reverse">
                  <input type="checkbox" id="terms" className="rounded mt-1" />
                  <label htmlFor="terms" className="text-sm">
                    {language === "en"
                      ? "I agree to the Terms of Service and Privacy Policy"
                      : "أوافق على شروط الخدمة وسياسة الخصوصية"}
                  </label>
                </div>
                <Button className="w-full">{t.createAccount}</Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {t.alreadyHaveAccount}{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => {
                      setShowSignUp(false)
                      setShowSignIn(true)
                    }}
                  >
                    {t.signIn}
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
