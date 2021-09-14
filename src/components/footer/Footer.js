import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <h2>Contact or Visit Us</h2>
      <div>
        <p>
          Streetstreet 12A
          <br />
          41 321
          <br />
          Göteborg
        </p>

        <p>
          Weekdays: 9:00 - 20:00
          <br />
          Weekends: 10:00 - 18:00
        </p>

        <p>
          Phone: 123 - 45 67 89
          <br />
          Email: email@mail.com
        </p>

        <a href="http://instagram.com">Instagram</a>
        {/* Map goes here. */}
      </div>
    </footer>
  );
};
