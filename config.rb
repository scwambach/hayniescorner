# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

data.api.businesses.each do |page|
  proxy "/discover/#{page[1].slug}/index.html", "/templates/business.html", locals: { page_name: page.first, content: page[1] }, ignore: true
end

proxy "/index.html", "/templates/page.html", ignore: true


# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def random_image()
    "/images/placeholder/image#{rand(1..20)}.jpg"
  end
  def random_user()
    "/images/users/user_#{rand(1..2)}.jpg"
  end
  def random_video()
    "/images/videos/temp_vid_#{rand(1..6)}.mp4"
  end
  def markdown(content)
    Tilt['markdown'].new(context: @app) { content }.render
  end
  def eventDate(string_date)
    year = ''
    mon = ''
    day = ''
    Date._strptime(string_date, '%Y-%m-%d').each do |num|
      if num[0].to_s == 'year'
        year = num[1]
      end
      if num[0].to_s == 'mon'
        mon = num[1]
      end
      if num[0].to_s == 'mday'
        day = num[1]
      end
    end
    if mon.to_s == '12'
      mon = 'December'
    elsif mon.to_s == '11'
      mon = 'Novemer'
    elsif mon.to_s == '10'
      mon = 'October'
    elsif mon.to_s == '9'
      mon = 'September'
    elsif mon.to_s == '8'
      mon = 'August'
    elsif mon.to_s == '7'
      mon = 'July'
    elsif mon.to_s == '6'
      mon = 'June'
    elsif mon.to_s == '5'
      mon = 'May'
    elsif mon.to_s == '4'
      mon = 'April'
    elsif mon.to_s == '3'
      mon = 'March'
    elsif mon.to_s == '2'
      mon = 'February'
    elsif mon.to_s == '1'
      mon = 'January'
    end
    newDate = "#{mon} #{day}, #{year}"
    return newDate
  end
end

set :css_dir, 'styles'
set :images_dir, 'images'
set :js_dir, 'js'
set :fonts_dir, 'fonts'

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_html
  activate :external_pipeline,
    name: :gulp,
    command: 'gulp build',
    source: '.tmp',
    latency: 1
  ignore 'js/**/*.js'
  ignore 'styles/site'
  ignore 'styles/site.css.css'
  ignore 'styles/site.css.css.map'
  ignore '*.keep'
  ignore '*.sass'
end

configure :development do
  activate :external_pipeline,
    name: :gulp,
    command: 'gulp',
    source: '.tmp',
    latency: 1
  ignore 'styles/site'
  ignore 'styles/site.css.css'
  ignore 'styles/site.css.css.map'
end
