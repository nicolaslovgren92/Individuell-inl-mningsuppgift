
document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterButton = document.querySelector(".newsletter .primary-button");
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});

// Del 4 - axe accessibility testing
window.addEventListener("load", function () {
    axe.run(document, {}, function (err, results) {
        if (err) {
            console.error("axe error:", err);
            return;
        }

        // Log to console
        console.group("axe Accessibility Results");
        console.log("Violations found:", results.violations.length);
        results.violations.forEach(function (violation) {
            console.group(`❌ ${violation.id} - ${violation.description}`);
            console.log("Impact:", violation.impact);
            console.log("Help:", violation.helpUrl);
            violation.nodes.forEach(function (node) {
                console.log("Element:", node.html);
            });
            console.groupEnd();
        });

        if (results.violations.length === 0) {
            console.log("✅ No accessibility violations found!");
        }
        console.groupEnd();

        // Show results on page
        var panel = document.getElementById("axe-results");
        var list = document.getElementById("axe-list");

        if (panel && list) {
            panel.style.display = "block";

            if (results.violations.length === 0) {
                list.innerHTML = "<li style='color:green'>✅ No violations found!</li>";
            } else {
                results.violations.forEach(function (violation) {
                    var li = document.createElement("li");
                    li.style.color = "red";
                    li.style.marginBottom = "5px";
                    li.innerHTML = `❌ <strong>${violation.id}</strong>: ${violation.description}`;
                    list.appendChild(li);
                });
            }
        }
    });
});