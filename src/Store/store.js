import { create } from "zustand";
import { getCampaigns } from "../api";

const useCommonStore = create((set) => ({
  steps: 1,
  setSteps: function () {
    set((state) => ({ ...state, steps: ++state.steps }));
  },
  allCampaigns: null,
  getCampaigns: async () => {
    const campaignsResponse = await getCampaigns();

    set((state) => ({ ...state, allCampaigns: campaignsResponse }));
  },

  filteredCampaign: [],
}));

export default useCommonStore;
