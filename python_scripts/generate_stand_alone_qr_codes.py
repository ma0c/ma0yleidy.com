from PIL import Image, ImageDraw, ImageFont
import qrcode

from python_scripts import get_cleaned_invitees_list, INVITEES_LIST

URL = "https://ma0yleidy.com/{attendee}"


if __name__ == "__main__":
    attendees = get_cleaned_invitees_list(INVITEES_LIST)
    for attendee in attendees:
        print(f"Generating QR code for: {attendee}")
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        full_url = URL.format(attendee=attendee)
        qr.add_data(full_url)
        qr.make(fit=True)
        img = qr.make_image(fill="black", back_color="white").get_image()
        qr_width, qr_height = img.size
        text_height = 0  # Space needed for text
        total_height = qr_height + text_height
        background = Image.new('RGB', (qr_width, total_height), (255, 255, 255))

        # 3. Paste the QR code onto the background

        background.paste(img, (0, 0))  # Paste at the top (0, 0)

        # 4. Add text using ImageDraw
        draw = ImageDraw.Draw(background)
        try:
            # Try to use a common font (adjust path/name as needed for your OS)
            font = ImageFont.truetype("arial.ttf", 20)
        except IOError:
            # Fallback if font is not found
            font = ImageFont.load_default()

        # Calculate text position (centered below the QR code)
        text_x = (qr_width - draw.textlength(full_url, font=font)) / 2
        text_y = qr_height - 30 # 10 pixels padding below QR

        draw.text((text_x, text_y), full_url, font=font, fill=(0, 0, 0))

        # 5. Save the final image
        background.save(f"stand_alone_output/{attendee}.png")

