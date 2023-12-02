import axios from 'axios';

// Function to upload the media file and format for conversion
export const convertMedia = async (mediaFile, format) => {
  const formData = new FormData();
  formData.append('file', mediaFile);
  formData.append('output_file', format);

  try {
    const response = await axios.post('https://35.208.111.114:8080/upload', formData, {
      responseType: 'blob', // important for files
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Create a URL for the file
    const fileURL = window.URL.createObjectURL(new Blob([response.data]));
    const fileLink = document.createElement('a');

    // You might want to derive the file name from the response header if available
    fileLink.href = fileURL;
    fileLink.setAttribute('download', format); // Set a default filename and format
    document.body.appendChild(fileLink);

    fileLink.click();

    fileLink.parentNode.removeChild(fileLink); // Clean up
  } catch (error) {
    console.error('Error during API call:', error);
    throw error;
  }
};
