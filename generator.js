
document.addEventListener("DOMContentLoaded", () => {

  const generatorForm = document.getElementById("generatorForm");
  const topicInput = document.getElementById("topic");
  const categoryInput = document.getElementById("generatorCategory");
  const toneInput = document.getElementById("tone");

  const generatedResult = document.getElementById("generatedResult");
  const resultContent = document.getElementById("resultContent");
  const copyGenerated = document.getElementById("copyGenerated");

  let generatedPrompt = "";

  // Generate Prompt
  generatorForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const topic = topicInput.value.trim();
    const category = categoryInput.value;
    const tone = toneInput.value;

    if (!topic || !category || !tone) {
      alert("Please fill in all the fields.");
      return;
    }

    let categoryInstruction = "";

    switch (category) {

      case "Writing":
        categoryInstruction =
          "Create engaging, original and well-structured written content.";
        break;

      case "Coding":
        categoryInstruction =
          "Provide a clear coding solution with explanations and useful examples.";
        break;

      case "Marketing":
        categoryInstruction =
          "Create an effective marketing strategy with practical ideas and suggestions.";
        break;

      case "Education":
        categoryInstruction =
          "Explain the topic in a simple, accurate and student-friendly way with examples.";
        break;

      case "Business":
        categoryInstruction =
          "Provide professional business guidance with practical steps and recommendations.";
        break;

      default:
        categoryInstruction =
          "Create a useful and detailed response based on the given requirements.";
    }

    // Build Generated Prompt
    generatedPrompt =
`Act as an expert ${category} assistant.

TASK:
${topic}

INSTRUCTIONS:
${categoryInstruction}

TONE:
Use a ${tone} tone throughout the response.

REQUIREMENTS:
1. Understand the task carefully.
2. Provide accurate and relevant information.
3. Organize the response using clear headings and points where appropriate.
4. Include useful examples whenever needed.
5. Avoid unnecessary information.
6. Make the final response clear, complete and easy to understand.

OUTPUT:
Provide a well-structured and high-quality response that fulfills the given requirements.`;

    // Display Generated Prompt
    resultContent.textContent = generatedPrompt;
    generatedResult.hidden = false;

    copyGenerated.textContent = "Copy Prompt";

    generatedResult.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  });

  // Copy Generated Prompt
  copyGenerated.addEventListener("click", async () => {

    if (!generatedPrompt) return;

    try {

      if (navigator.clipboard && window.isSecureContext) {

        await navigator.clipboard.writeText(generatedPrompt);

      } else {

        const textArea = document.createElement("textarea");

        textArea.value = generatedPrompt;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.select();

        const copied = document.execCommand("copy");

        textArea.remove();

        if (!copied) {
          throw new Error("Copy failed");
        }

      }

      copyGenerated.textContent = "Copied Successfully! ✓";

    } catch (error) {

      copyGenerated.textContent = "Copy Failed";

    }

    setTimeout(() => {
      copyGenerated.textContent = "Copy Prompt";
    }, 2000);

  });

});
