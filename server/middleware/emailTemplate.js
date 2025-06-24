function ACCOUNT_VERIFY(name, otp) {
  return `
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="#" style="font-size:1.4em;color:#00466a;text-decoration:none;font-weight:600">CodeX</a>
        </div>
        <p style="font-size:1.1em">Hi ${name},</p>
        <p>Use the following OTP to complete your verification.</p>
        <h2 style="background:#00466a;color:#fff;width:max-content;padding:0 10px;border-radius:4px;margin:0 auto">${otp}</h2>
        <p style="font-size:0.9em;">If you did not request this, please ignore.</p>
        <hr style="border:none;border-top:1px solid #eee"/>
        <div style="text-align:right;color:#aaa;font-size:0.8em;">
          <p>CodeX Inc</p>
          <p>1600 Chandigrah PB.</p>
          <p>India PB.</p>
        </div>
      </div>
    </div>`;
}

module.exports = { ACCOUNT_VERIFY };
