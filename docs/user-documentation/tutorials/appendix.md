---
displayed_sidebar: tutorialSidebar
title: Appendix
label: Appendix
---
# Appendix

Function to create the analysis plot.

```py
from pathlib import Path

import matplotlib.pyplot as plt
from matplotlib.ticker import MultipleLocator

BASE_PATH = Path("__file__").parent.resolve()


def plot_results(thetas: np.ndarray, results: dict):
    """Visualizes the results of the CHSH experiment."""

    lims_c = [-2, 2]
    lims_q = [y * np.sqrt(2) for y in lims_c]

    fig, axes = plt.subplots(ncols=2, figsize=(9,4))

    for ax in axes:
        # Show classical and quantum bounds for S_minus and S_plus.
        ax.axhline(lims_q[0], ls="--", c="k")
        ax.axhline(lims_c[0], ls="-.", c="k")
        ax.axhline(lims_c[1], ls="-.", c="k")
        ax.axhline(lims_q[1], ls='--', c="k")
        ax.fill_between([-1, 7], lims_c[1], lims_q[1], color="green", alpha=.1)
        ax.fill_between([-1, 7], lims_q[0], lims_c[0], color="green", alpha=.1)

        # Plot simulators results on both subplots.
        S_minus, S_plus = results["simulators"]
        ax.plot(thetas, S_minus, ls=":", label=r"$\langle S_{-} \rangle$ (sim.)", color="darkgrey")
        ax.plot(thetas, S_plus, ls="--", label=r"$\langle S_{+} \rangle$ (sim.)", color="darkgrey")

        ax.set_xlabel(r"$\theta$", fontsize=12)
        ax.set_xlim(0 - np.pi / 4, 2 * np.pi + np.pi / 4)
        ax.xaxis.set_major_locator(MultipleLocator(np.pi / 2))
        ax.grid(alpha=.3)

    # Plot results from "ibmq_lima".
    S_minus, S_plus = results["lima"]
    axes[0].plot(thetas, S_minus, "o-", label=r"$\langle S_{-} \rangle$", color="darkorange")
    axes[0].plot(thetas, S_plus, "s-", label=r"$\langle S_{+} \rangle$", color="slateblue")
    axes[0].set_title("IBMQ LIMA")

    # Plot results from "ibmq_lagos".
    S_minus, S_plus = results["lagos"]
    axes[1].plot(thetas, S_minus, "o-", label=r"$\langle S_{-} \rangle$", color="darkorange")
    axes[1].plot(thetas, S_plus, "s-", label=r"$\langle S_{+} \rangle$", color="slateblue")
    axes[1].set_title("IBM LAGOS")

    # Make the legend.
    handles, labels = axes[1].get_legend_handles_labels()
    legend = fig.legend(handles, labels, loc="upper center", fontsize=10, ncols=4, frameon=False)

    # Save the figure.
    name = BASE_PATH / f"tutorial_plot.png"
    fig.subplots_adjust(top=.8)
    fig.savefig(name, dpi=3 * 96, bbox_extra_artists=[legend], transparent=True)

```