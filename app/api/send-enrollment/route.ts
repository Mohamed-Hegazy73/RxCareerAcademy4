import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phoneNumber, position, studyingObjectives, courseName, courseId, to } = await request.json()

    // Validate required fields
    if (!name || !email || !phoneNumber || !position || !studyingObjectives || !courseName || !to) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create enrollment email content
    const emailContent = {
      from: email,
      to: to,
      subject: `New Course Enrollment - ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">RxCareerAcademy</h1>
            <p style="color: #666; margin: 5px 0;">New Course Enrollment</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
            <h2 style="color: #1e293b; margin-top: 0;">Course Information</h2>
            <p style="margin: 10px 0; font-size: 16px;"><strong>Course:</strong> ${courseName}</p>
            <p style="margin: 10px 0; color: #6b7280;">Course ID: ${courseId}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin-top: 0;">Student Information</h2>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phoneNumber}</p>
            <p style="margin: 10px 0;"><strong>Position:</strong> ${position}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Studying Objectives</h3>
            <p style="line-height: 1.6; color: #374151; white-space: pre-wrap;">${studyingObjectives}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This enrollment was submitted from the RxCareerAcademy website
            </p>
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
        New Course Enrollment - RxCareerAcademy
        
        Course: ${courseName}
        Course ID: ${courseId}
        
        Student Information:
        Name: ${name}
        Email: ${email}
        Phone: ${phoneNumber}
        Position: ${position}
        
        Studying Objectives:
        ${studyingObjectives}
        
        Submitted on: ${new Date().toLocaleString()}
      `,
    }

    // In a real application, you would use an email service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend
    // - Postmark

    // For demonstration, we'll simulate sending the email
    console.log("Enrollment email would be sent with content:", emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, replace this with actual email sending logic:
    /*
    // Example with Resend:
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'noreply@rxcareeracademy.com',
      to: to,
      subject: emailContent.subject,
      html: emailContent.html,
      reply_to: email
    })
    */

    return NextResponse.json(
      {
        success: true,
        message: "Enrollment submitted successfully",
        courseId: courseId,
        courseName: courseName,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing enrollment:", error)
    return NextResponse.json({ error: "Failed to process enrollment" }, { status: 500 })
  }
}
