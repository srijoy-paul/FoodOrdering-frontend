function parseDate(dateString: string) {
  // Parse the date string into a datetime object with timezone information
  try {
    const parsedDate = new Date(dateString);
    return parsedDate;
  } catch (error) {
    console.error(
      "Invalid date format. Please provide a date string in YYYY-MM-DDTHH:MM:SS.fffZ format."
    );
    return null;
  }
}

export function timeSince(dateString: string) {
  const parsedDate = parseDate(dateString);
  if (!parsedDate) return;

  const now = new Date();

  // Calculate the difference in milliseconds
  const delta = now.getTime() - parsedDate.getTime();

  // Check if the difference is in seconds (less than a minute)
  if (delta < 60 * 1000) {
    return "Less than a minute ago";
  }

  // Check if the difference is in minutes (less than an hour)
  if (delta < 3600 * 1000) {
    const minutes = Math.floor(delta / (1000 * 60));
    return `${minutes} minutes ago`;
  }

  // Otherwise, calculate the difference in hours or days
  const hours = Math.floor(delta / (1000 * 60 * 60));
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));

  // Print the result based on the difference
  if (days > 0) {
    return `${days} days ago`;
  } else {
    return `${hours} hours ago`;
  }
}
