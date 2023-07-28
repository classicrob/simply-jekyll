module Jekyll
  module RelativeUrlExtractorFilter
    def extract_relative_urls(input)
      link_joiner_delimiter = '$@'
      relative_urls = input.scan(/\/notes\/[\w-]+/)
      relative_urls.join(link_joiner_delimiter)
    end
  end
end

Liquid::Template.register_filter(Jekyll::RelativeUrlExtractorFilter)
