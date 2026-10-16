/**
 * AdSense Responsive Loader with Layout Stabilization
 */
document.addEventListener("DOMContentLoaded", () => {
  const adSlots = document.querySelectorAll(".ad-container");
  
  adSlots.forEach((slot) => {
    // Determine appropriate slot class if not explicitly declared
    if (!slot.classList.contains("ad-slot-header") && 
        !slot.classList.contains("ad-slot-incontent") && 
        !slot.classList.contains("ad-slot-footer")) {
      slot.classList.add("ad-slot-incontent");
    }

    // Verify if an ins tag is already populated
    const existingIns = slot.querySelector("ins.adsbygoogle");
    if (!existingIns) {
      const ins = document.createElement("ins");
      ins.className = "adsbygoogle";
      ins.style.display = "block";
      ins.setAttribute("data-ad-client", "ca-pub-7331908906297312");
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");
      
      slot.appendChild(ins);
      
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn("AdSense script load deferred or blocked:", err);
      }
    }
  });
});