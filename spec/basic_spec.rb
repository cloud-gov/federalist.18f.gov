describe "home page", type: :feature, js: false do
  before(:each) do
    visit '/'
  end
  
  it "has splash message" do
    expect(page).to have_text("There’s no easier way to build, launch, and manage government sites.")    
  end
  
  it "should have the images" do
    expect(page).to have_css("img[src*='/assets/images/partner-sites/performance.gov.png']")
  end

  it "should have footer image" do
    expect(page).to have_css("img[src*='/assets/images/federalist-logo.png']")
  end
end


describe "features page", type: :feature, js: false do
  before(:each) do
    visit '/features'
  end
  it "has compliance message" do
    expect(page).to have_text("We’ve taken the work out of launching a compliant federal website.")
  end

  it "should have the images" do
    expect(page).to have_css("img[src*='/assets/images/icons/icon-rocket-color.svg']")
  end

end

describe "success stories page", type: :feature, js: false do
  before(:each) do
    visit '/success-stories'
  end

  it "has trust message" do
    expect(page).to have_text("Trusted and scalable.")
  end

  it "should have the images" do
    expect(page).to have_css("img[src*='/assets/images/partner-sites/vote.gov.png']")
  end

end

describe "pricing page", type: :feature, js: false do
  before(:each) do
    visit '/pricing'
  end
  it "has support message" do
    expect(page).to have_text("Pricing")
  end
end

describe "contact page", type: :feature, js: false do
  before(:each) do
    visit '/contact'
  end
  it "has contact message" do
    expect(page).to have_text("Interested in using Federalist?")
  end
end
