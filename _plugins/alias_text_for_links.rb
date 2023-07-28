module Jekyll
  module AnchorTextExtractorFilter
    def extract_anchor_texts(input)
      anchor_text_joiner_delimiter = '$@'
      anchor_texts = input.scan(/<a href="\/notes\/[\w-]+">(.+?)<\/a>/).flatten
      anchor_texts.join(anchor_text_joiner_delimiter)
    end
  end
end

Liquid::Template.register_filter(Jekyll::AnchorTextExtractorFilter)