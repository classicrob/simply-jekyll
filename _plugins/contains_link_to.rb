# module Jekyll
#   module LinkFilter
#     def contains_link_to(html, url)
#       /<a href="\/notes\/#{Regexp.escape(url)}">[^<]*<\/a>/.match?(html)
#     end

#     def extract_page_title(url)
#       url.split("/").last
#     end
#   end
# end

# Liquid::Template.register_filter(Jekyll::LinkFilter)
